---
title: "Obsolete Syntax"
description: |
  ... t1 TYPE itab_typeLIKE itabSTRUCTURE struc t2 TYPE itab_typeLIKE itabSTRUCTURE struc ... Effect Defines table parameters(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_parameter_glosry.htm 'Glossary Entry')
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapform_tables.htm"
abapFile: "abapform_tables.htm"
keywords: ["do", "if", "case", "try", "types", "internal-table", "abapform", "tables"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapform.htm) → 

FORM - table\_parameters

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapform_shortref.htm)

Obsolete Syntax

... t1 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    t2 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    ...

Effect

Defines [table parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_parameter_glosry.htm "Glossary Entry") t1 t2 ... for subroutines A table parameter is typed as follows:

-   A table type itab\_type of the table category [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be specified after the addition TYPE. Both full and generic table types are possible, as well as the built-in generic type STANDARD TABLE.
    
-   An internal table itabof the table category [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be specified after the addition LIKE. The technical properties of this internal type are applied in full.
    
-   A [flat structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_structure_glosry.htm "Glossary Entry") struc can be specified after the obsolete addition [STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapform_structure.htm).
    
-   If nothing is specified explicitly, TYPE STANDARD TABLE is used implicitly as the typing.
    

The additions TYPE and LIKE type the formal parameter either generically or in full. The addition STRUCTURE applies the structure struc to the row type. The table key remains generic. In generic typings, the formal parameter takes the non-fixed technical type properties from the actual parameter and the usual [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping.htm) rules apply.

When TABLES parameters are accessed that are not bound to any type-friendly actual parameters, the same [exception situation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentables_parameters_restrictions.htm) can arise as in function modules.

Notes

-   The definition of table parameters is obsolete and can be replaced by general [formal parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapform_parameters.htm) defined using USING and CHANGING.
    
-   The table key of a table parameter is either defined in full in the typing or it is taken from the actual parameter in the case of generic typing. This means that the table key of a table parameter is not necessarily the [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_standard_key.htm).