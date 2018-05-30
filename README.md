# Adam's First Angular App

> This app is probably near the upper bound of terrible, but that is what we like to see in learning apps.

## Notes

### Directives

Directives are instructions in the DOM.

- Components are directives.
- There are built-in directives.

### ngIf

`ngIf` is a structural directive, seen by `*`.

Attribute directives don't add or remove elements. They only modify an element in the DOM.

``` javascript
<p *ngIf="isServerCreated; else noServer">Server was created, server name is {{ serverName }}</p>
<ng-template #noServer>
  <p>No server was created!</p>
</ng-template>
```
