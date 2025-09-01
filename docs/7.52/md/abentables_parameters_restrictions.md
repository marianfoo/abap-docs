---
title: "Exceptions when Accessing TABLES Parameters"
description: |
  In some variants of statements, which use a work area to access internal tables, the work area must be compatible with the row type of the internal table. This is checked statically by the syntax check. In the case of TABLES parameters typed using the obsolete addition STRUCTURE(https://help.sap.c
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentables_parameters_restrictions.htm"
abapFile: "abentables_parameters_restrictions.htm"
keywords: ["do", "if", "case", "try", "data", "internal-table", "abentables", "parameters", "restrictions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_modules_obsolete.htm) →  [FUNCTION - table\_parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_parameters_obsolete.htm) → 

Exceptions when Accessing TABLES Parameters

In some variants of statements, which use a work area to access internal tables, the work area must be compatible with the row type of the internal table. This is checked statically by the syntax check.

In the case of TABLES parameters typed using the obsolete addition [STRUCTURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction_typing_obsolete.htm), the compatibility of the work area with the type specified in STRUCTURE is checked. The [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry") that always accompanies TABLES parameters also has this type.

If a TABLES parameter is typed using STRUCTURE it can also be bound to actual parameters whose row type is longer than the type of the TABLES parameter, so making them incompatible with a work area judged to be correct by the syntax check. This causes problems if the components of the TABLES parameter are accessed dynamically within the procedure, since the data type of the actual parameter is evaluated at runtime. Consequently, memory limits can be violated by statements accessing a work area that references the type specified using STRUCTURE. This is why the following accesses produce the runtime error ITAB\_STRUC\_ACCESS\_VIOLATION:

-   The following statements terminate when the component specified in name is used to access a memory area after wa.

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) [INTO wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_outdesc.htm) ... [COMPARING*|*TRANSPORTING ... (name) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_transport_options.htm)

-   [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) [FROM wa TRANSPORTING ... (name) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm)

-   [APPEND wa TO itab SORTED BY ... (name) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm)

-   The following statements terminated when wa is shorter than the row type:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) [INTO wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_outdesc.htm) ... [COMPARING ALL FIELDS.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_transport_options.htm)

-   [COLLECT wa INTO itab ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcollect.htm)

This exception is particularly likely if the [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry") is used as an implicit work area. An explicit work area with the type of the actual parameter should be used to avoid this runtime error.