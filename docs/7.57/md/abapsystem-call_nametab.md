  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Nametab Management, ABAPSYSTEM-CALL_NAMETAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

Nametab Management

This statement is for internal use only.
It must not be used in application programs.

Variants:

[1.EXPORT NAMETAB h f ID id.](#!ABAP_VARIANT_1@1@)
[2.IMPORT NAMETAB h f ID id.](#!ABAP_VARIANT_2@2@)

Variant 1   

EXPORT NAMETAB h f ID id.

Effect

Exports a generated structure description. This statement may only used by ABAP [Repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_glosry.htm "Glossary Entry") tools. A standard table without a secondary key can be specified for the field list f.

Variant 2   

IMPORT NAMETAB h f ID id.

Effect

Reads a generated structure description. This statement may only be used by ABAP Repository tools. A standard table without a secondary key can be specified for the field list f.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Table name is too long.
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID