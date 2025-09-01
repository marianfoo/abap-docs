  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Doc in Release 7.52, ABENNEWS-752-ABAP_DOC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP Doc in Release 7.52

[1\. Documentation Links](#!ABAP_MODIFICATION_1@1@)
[2\. Further Changes](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Documentation Links

The new syntax {@link ...} makes it possible to link to other documentation of repository objects (or its components) in [ABAP Doc comments](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry").

Modification 2   

Further Changes

The following changes have also been made to [ABAP Doc comments](javascript:call_link\('abenabap_doc_comment_glosry.htm'\) "Glossary Entry"):

-   Opening and closing tags no longer need to be specified in lowercase letters.
-   The restriction to 7 bit ASCII characters no longer applies. An ABAP Doc comment can now contain any 16 bit Unicode characters.
-   <br> or <br/> can be used to specify a line break. <br></br> should no longer be used.
-   The special characters @ and < now only need to be escaped when they are placed directly in front of another character.
-   Lists can now be nested.
-   The tags <p>, <ul>, or <ol> can now be placed within <h1>, <h2>, <h3>, <p>, <em>, or <strong> tags.
-   Text can now be specified directly within <ol> and <ul> tags.
-   In the <ol> tag, the attributes reversed, start, and type can now be specified with their traditional HTML meaning.
-   The attributes specified in tags are now checked by the syntax check.