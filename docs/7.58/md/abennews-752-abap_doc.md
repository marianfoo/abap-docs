  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.52](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Doc%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-ABAP_DOC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Doc in ABAP Release 7.52

[1\. Documentation Links](#!ABAP_MODIFICATION_1@1@)
[2\. Further Changes](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Documentation Links

The new syntax {@link ...} makes it possible to link to other documentation of repository objects (or its components) in [ABAP Doc comments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry").

Modification 2   

Further Changes

The following changes have also been made to [ABAP Doc comments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry"):

-   Opening and closing tags no longer need to be specified in lowercase letters.
-   The restriction to 7 bit ASCII characters no longer applies. An ABAP Doc comment can now contain any 16 bit Unicode characters.
-   <br> or <br/> can be used to specify a line break. <br></br> should no longer be used.
-   The special characters @ and < now only need to be escaped when they are placed directly in front of another character.
-   Lists can now be nested.
-   The tags <p>, <ul>, or <ol> can now be placed within <h1>, <h2>, <h3>, <p>, <em>, or <strong> tags.
-   Text can now be specified directly within <ol> and <ul> tags.
-   In the <ol> tag, the attributes reversed, start, and type can now be specified with their traditional HTML meaning.
-   The attributes specified in tags are now checked by the syntax check.