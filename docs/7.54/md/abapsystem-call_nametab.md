  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

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

Non-Handleable Exceptions

-   Cause: Table name is too long.
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID