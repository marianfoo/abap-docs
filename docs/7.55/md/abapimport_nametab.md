  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

IMPORT NAMETAB

This statement is no longer supported.

Syntax

IMPORT NAMETAB ...

Effect

This statement was used internally to import a DDIC structure description in an internal format from the [name table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenname_table_glosry.htm "Glossary Entry") of the ABAP Dictionary.

The statement is not supported any more. The usage of the statement is not yet completely prohibite for reasons of downward compatibility only.Any attempt to import the entry for an [DDIC table type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_type_glosry.htm "Glossary Entry") results in a runtime error already. Any other usage produces errors from ATC.

System Fields

sy-subrc

Meaning

0

The specified entry was found.

4

The specified entry was not found.

Hint

Instead of this statement, the function modules DDIF\_NAMETAB\_GET and DDIF\_FIELDINFO\_GET must be used. The RTTS class CL\_ABAP\_TYPEDESCR also offers methods GET\_DDIC\_HEADER and GET\_DDIC\_OBJECT to retrieve information from the [name table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenname_table_glosry.htm "Glossary Entry").

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Statement is not supported for DDIC internal table types.
    Runtime error: IMPORT\_NAMETAB\_OUTDATED

-   Cause: Table name is too long.
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID