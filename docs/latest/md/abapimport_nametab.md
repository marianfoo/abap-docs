---
title: "IMPORT NAMETAB"
description: |
  This statement is no longer supported. Syntax IMPORT NAMETAB ... Effect This statement was used internally to import a DDIC structure description in an internal format from the name table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_table_glosry.htm 'Glossary Entry') of
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_nametab.htm"
abapFile: "abapimport_nametab.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "types", "internal-table", "abapimport", "nametab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%20NAMETAB%2C%20ABAPIMPORT_NAMETAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT NAMETAB

This statement is no longer supported.

Syntax

IMPORT NAMETAB ...

Effect

This statement was used internally to import a DDIC structure description in an internal format from the [name table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_table_glosry.htm "Glossary Entry") of the ABAP Dictionary.

The statement is not supported any more. The usage of the statement is not yet completely prohibited for reasons of downward compatibility only. Any attempt to import the entry for an [DDIC table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_type_glosry.htm "Glossary Entry") already produces a runtime error. Any other usage produces errors from ATC.

System Fields

sy-subrc

Meaning

0

The specified entry was found.

4

The specified entry was not found.

Hint

Instead of this statement, the function modules DDIF\_NAMETAB\_GET and DDIF\_FIELDINFO\_GET must be used. The RTTS class CL\_ABAP\_TYPEDESCR also offers methods GET\_DDIC\_HEADER and GET\_DDIC\_OBJECT to retrieve information from the [name table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_table_glosry.htm "Glossary Entry").

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Statement is not supported for DDIC internal table types.
    Runtime error: IMPORT\_NAMETAB\_OUTDATED
-   Cause: Table name is too long.
    Runtime error: IMPORT\_NAMETAB\_WRONG\_ID