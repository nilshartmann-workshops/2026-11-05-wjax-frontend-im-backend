package nh.recipify;

import org.springframework.core.io.Resource;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

/// Findet zu einem Pfad wie "/recipes/detail" die Datei "recipes/detail.html"
/// aus dem statischen Export der SPA. Der Export legt je Seite eine HTML-Datei
/// an und kennt keine Umleitungen.
class SpaResourceResolver extends PathResourceResolver {

    @Override
    protected Resource getResource(String resourcePath, Resource location) throws IOException {
        var resource = super.getResource(resourcePath, location);
        if (resource != null) {
            return resource;
        }
        return super.getResource(resourcePath + ".html", location);
    }
}
