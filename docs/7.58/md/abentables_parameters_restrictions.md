  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_modules_obsolete.htm) →  [FUNCTION, table\_parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables_parameters_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%20when%20Accessing%20TABLES%20Parameters%2C%20ABENTABLES_PARAMETERS_RESTRICTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

Exceptions when Accessing TABLES Parameters

In some variants of statements, which use a work area to access internal tables, the work area must be compatible with the line type of the internal table. This is checked statically by the syntax check.

In the case of TABLES parameters typed using the obsolete addition [STRUCTURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction_typing_obsolete.htm), the compatibility of the work area with the type specified in STRUCTURE is checked. The [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry") that always exists for TABLES parameters also has this type.

If a TABLES parameter is typed using STRUCTURE it can also be bound to actual parameters whose line type is longer than the type of the TABLES parameter and that are therefore incompatible with a work area recognized as correct by the syntax check. This causes problems if the components of the TABLES parameter are accessed dynamically within the procedure, since the data type of the actual parameter is evaluated at runtime. Therefore, memory limits can be violated by statements accessing a work area that references the type specified using STRUCTURE. This is why the following accesses produce the runtime error ITAB\_STRUC\_ACCESS\_VIOLATION:

-   The following statements are terminated when the component specified in name is used to access a memory area after wa.
    -   [READ TABLE itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) [INTO wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm) ... [COMPARING*|*TRANSPORTING ... (name) ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm)
    -   [MODIFY itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm) [FROM wa TRANSPORTING ... (name) ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab_single.htm)
    -   [APPEND wa TO itab SORTED BY ... (name) ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapappend.htm)
-   The following statements are terminated when wa is shorter than the line type:
    -   [READ TABLE itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) [INTO wa](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm) ... [COMPARING ALL FIELDS.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm)
    -   [COLLECT wa INTO itab ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcollect.htm)

This exception can occur particularly if the [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry") is used as an implicit work area. An explicit work area with the type of the actual parameter should be used to avoid this runtime error.