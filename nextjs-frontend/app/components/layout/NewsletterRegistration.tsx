"use client";

import React, { useActionState, useState } from "react";
import { Input } from "@/app/components/Input.tsx";
import { subscribeToNewsletter } from "@/app/components/layout/newsletter-actions.ts";
import { Button } from "@/app/components/Button.tsx";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";

// 🕵️‍♂️ "progressive enhancement" form:
//    - WITHOUT enabled or loaded JS, this form is submitted as a "regular" form
//      with full page refresh
//    - WITH javascript only the data is submitted and the form is updated, but
//      not the whole ui
//    - with javascript we have a loading indicator
//    - also with js there the message is removed after user changes the
//      email address
export function NewsletterRegistration() {
  const [formState, action, isPending] = useActionState(subscribeToNewsletter, {
    email: "",
  });

  const [changedRequestId, setChangedRequestId] = useState("");

  const shouldShowMessage =
    changedRequestId === undefined
      ? true
      : formState.requestId !== changedRequestId;

  return (
    <form
      action={action}
      className={"font-barlow flex items-center space-x-4 ps-2 pe-2"}
    >
      <div>Don't miss latest news. Subscribe to newsletter</div>

      <div className={"max-w-64"}>
        <Input
          name={"email"}
          defaultValue={formState.email}
          onChange={() => setChangedRequestId(formState.requestId || "")}
          disabled={isPending}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button>
          {isPending ? (
            <LoadingIndicator secondary />
          ) : (
            <button
              type={"submit"}
              onClick={() => setChangedRequestId(formState.requestId || "")}
            >
              Subscribe
            </button>
          )}
        </Button>
      </div>

      <div>{shouldShowMessage && formState.status}</div>
    </form>
  );
}
