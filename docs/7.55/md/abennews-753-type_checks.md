  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-753.htm) → 

Type Checks in Release 7.53

[1\. Checks on common data areas](#!ABAP_MODIFICATION_1@1@)
[2\. Checks on STRUCTURE typing](#!ABAP_MODIFICATION_2@2@)
[3\. Checks on literals as actual parameters](#!ABAP_MODIFICATION_3@3@)

Modification 1

Checks on Common Data Areas

Obsolete common data areas with the same name and defined using [COMMON PART](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_common.htm) must have identical layouts.

-   Common data areas are now viewed as structures whose [structure fragment view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must be identical and whose deep components must be compatible (pairwise). If not, the runtime error LOAD\_COMMON\_PART\_STRUCT occurs.

-   In common data areas it is now no longer possible to declare [object reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") with the static type of program-local classes and interfaces, nor is it possible to declare [data reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") with the static type of program-local structured types.
    

Modification 2

Checks on STRUCTURE Typing

In obsolete STRUCTURE typing of formal parameters and field symbols, one assigned data object must be at least as long as the structure in question. Typing checks now respect the [alignment gaps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment_gap_glosry.htm "Glossary Entry") at the end of the data object and the structure.

Modification 3

Checks on Literals as Actual Parameters

The value of a literal passed to a procedure must not be modified in the procedure. In certain cases this was, however, possible, namely when [literals as actual parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_literals.htm) were passed to differently typed CHANGING parameters of subroutines. This is now prevented by stricter checks and always produces a runtime error.