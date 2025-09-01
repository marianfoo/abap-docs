---
title: "General Rules for Typing"
description: |
  The general rules for checking apply strictly to the following: -   The assignment of all data objects to field symbols(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') -   The linking of the said data objects to input(https://help.sap.com/
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check_general.htm"
abapFile: "abentyping_check_general.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "internal-table", "field-symbol", "abentyping", "check", "general"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) → 

General Rules for Typing

The general rules for checking apply strictly to the following:

-   The assignment of all data objects to [field symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm "Glossary Entry")

-   The linking of the said data objects to [input](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_parameter_glosry.htm "Glossary Entry"), [input/output](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), and [output parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") for procedures

The general rules for checking the typing are:

-   If the assignment is made to generically typed field symbols or field parameters, the system checks whether the [technical type attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") of the assigned data object are a subset of the generic type. The type attributes that are not defined by typing are applied to the actual parameter.

-   If the assignment is made to fully typed field symbols or formal parameters, the technical attributes of the data type of the assigned data object must correspond exactly to the typing. If the assignment is made to field symbols or formal parameters typed with [enumerated types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_enum.htm), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.

-   The result of the typing check when actual parameters are passed to formal parameters is independent of the passing type used. In a [pass by value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the check for [pass by reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is always carried out, even though this is stricter than necessary in individual cases.

-   If reference variables are passed, [up casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry") are possible but [down casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry") are not. If actual parameters are passed to input parameters typed as reference variables, an [up cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry") is only possible if there is no change of content within the procedure. When a [subroutine](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry") is passed to the parameters, an up cast is not possible.

-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.

-   If the assignment is made to generically and fully typed field symbols or formal parameters, only the [technical type attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") are checked. The following are not checked:

-   Names of structure components (names of nodes and associations of [meshes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_glosry.htm "Glossary Entry") are possible here).

-   Semantic attributes of data types defined in ABAP Dictionary (conversion routines, documentation, and so on)

-   Initial memory requirement of internal tables

If generally typed formal parameters or field symbols are accessed dynamically, these attributes are applied to the type of the actual parameter. If generically typed formal parameters or field symbols are accessed statically, these attributes are applied to the typing of the formal parameter.

-   When assigning to field symbols or formal parameters for which a structure is defined with the obsolete STRUCTURE addition are called in Unicode programs, elementary data structures must be character type and flat and for structures the [fragment views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match.

Notes

-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules and externally called subroutines, the typing is checked first at the time of the assignment - that is, at runtime. In the case of fully typed field symbols and formal parameters of methods and internally called subroutines, the check is performed as part of the [syntax check](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensyntax_check_glosry.htm "Glossary Entry").

-   The constructor operators [CONV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm) and [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm) are well suited to converting or casting invalid actual parameters to the type of a formal parameter.