  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Nametab%20Management%2C%20ABAPSYSTEM-CALL_NAMETAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Nametab Management

This statement is for internal use only.
It must not be used in application programs.

Variants:

[1.EXPORT NAMETAB h f ID id.](#!ABAP_VARIANT_1@1@)
[2.IMPORT NAMETAB h f ID id.](#!ABAP_VARIANT_2@2@)

Variant 1   

EXPORT NAMETAB h f ID id.

Effect

Exports a generated structure description. This statement may only used by ABAP [Repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") tools. A standard table without a secondary key can be specified for the field list f.

Variant 2   

IMPORT NAMETAB h f ID id.

Effect

Reads a generated structure description. This statement may only be used by ABAP Repository tools. A standard table without a secondary key can be specified for the field list f.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Table name is too long.
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID