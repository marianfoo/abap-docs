  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyntax_obsolete.htm) →  [Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpseudo_comments_obsolete.htm) → 

Pseudo Comments for Test Classes

Obsolete Syntax

... "#AU Risk\_Level Critical*|*Dangerous*|*Harmless

... "#AU Duration Short*|*Medium*|*Long

Effect

The string "#AU in the statement [CLASS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_definition.htm) with the addition [FOR TESTING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_for_testing.htm) defines a [pseudo comment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for defining a test property of a [test class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentest_class_glosry.htm "Glossary Entry").

Pseudo comments are case-sensitive. Any deviations from the syntax produce a warning when tests are performed.

Notes

-   Real additions are now available for the statement [CLASS ... FOR TESTING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_for_testing.htm) for defining test properties. These additions should be used instead of the pseudo comments. This makes pseudo comments for test classes obsolete. Existing pseudo comments are not ignored, but should no longer be used.

-   To specify both test attributes for a test class, the CLASS statement must be spread across at least two lines.