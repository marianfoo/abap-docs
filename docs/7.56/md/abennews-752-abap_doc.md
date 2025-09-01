  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-752.htm) → 

ABAP Doc in Release 7.52

[1\. Documentation Links](#!ABAP_MODIFICATION_1@1@)
[2\. Test Relations](#!ABAP_MODIFICATION_2@2@)
[3\. Further Changes](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Documentation Links

The new syntax {@link ...} makes it possible to link to other documentation of repository objects (or its components) in [ABAP Doc comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry").

Modification 2   

Test Relations

The new syntax @testing ... in [ABAP Doc comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") associates test classes and test methods with repository objects. This makes it possible to display and execute these classes and methods in the [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") of the repository objects.

Modification 3   

Further Changes

The following changes have also been made to [ABAP Doc comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry"):

-   Opening and closing tags no longer need to be specified in lowercase letters.
-   The restriction to 7 bit ASCII characters no longer applies. An ABAP Doc comment can now contain any 16 bit Unicode characters.
-   <br> or <br/> can be used to specify a line break. <br></br> should no longer be used.
-   The special characters @ and < now only need to be escaped when they are placed directly in front of another character.
-   Lists can now be nested.
-   The tags <p>, <ul>, or <ol> can now be placed within <h1>, <h2>, <h3>, <p>, <em>, or <strong> tags.
-   Text can now be specified directly within <ol> and <ul> tags.
-   In the <ol> tag, the attributes reversed, start, and type can now be specified with their traditional HTML meaning.
-   The attributes specified in tags are now checked by the syntax check.