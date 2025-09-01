---
title: "Obsolete Syntax"
description: |
  ... t1 TYPE itab_typeLIKE itabSTRUCTURE struc t2 TYPE itab_typeLIKE itabSTRUCTURE struc ... Effect Defines table parameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm 'Glossary Entry')
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_tables.htm"
abapFile: "abapform_tables.htm"
keywords: ["do", "if", "try", "internal-table", "abapform", "tables"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_modularization.htm) →  [Subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subroutines.htm) →  [FORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform.htm) → 

FORM - table\_parameters

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_shortref.htm)

Obsolete Syntax

... t1 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    t2 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
    ...

Effect

Defines [table parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_parameter_glosry.htm "Glossary Entry") t1 t2 ... for subroutines

A table type table\_type or an internal table itab from the table category [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be specified after the additions TYPE and LIKE.

The additions TYPE and LIKE type the row type of the formal parameter with the row type of the specified internal table. The other obsolete addition, [STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm), stamps the row type with the [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") struc.

When TABLES parameters are accessed that are not bound to any type-friendly actual parameters, the same [exception situation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentables_parameters_restrictions.htm) can arise as in function modules.

Note

The definition of table parameters is obsolete and can be replaced by general [formal parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapform_parameters.htm) defined using USING and CHANGING.