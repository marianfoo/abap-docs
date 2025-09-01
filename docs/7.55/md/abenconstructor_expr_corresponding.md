---
title: "CORRESPONDING, Component Operator"
description: |
  Syntax Forms Base Form(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm) 1. ...  CORRESPONDING dtype#( DEEP BASE ( base ) structitab  duplicates(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresp
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm"
abapFile: "abenconstructor_expr_corresponding.htm"
keywords: ["do", "if", "try", "data", "internal-table", "field-symbol", "abenconstructor", "expr", "corresponding"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) → 

CORRESPONDING, Component Operator

Syntax Forms

[Base Form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm)
1\. ... *{* CORRESPONDING dtype*|*#( *\[*DEEP*\]*
                               *\[*BASE ( base )*\]*
                               struct*|**{*itab *\[* [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm)*\]**}* ) *}*
    *|* *{* CORRESPONDING dtype*|*#( *\[*BASE ( base )*\]*
                               struct*|**{*itab *\[* [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm)*\]**}*
                               [mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_mapping.htm) ) *}* ...
[Lookup Table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_using.htm)
2\. ... CORRESPONDING type( itab FROM lookup\_tab
                               USING *\[*KEY key\_name*\]* s1 = t1 s2 = t2 ...
                               *\[*[mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_mapping.htm)*\]* ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expressions.htm) with the component operator CORRESPONDING creates a result of a data type specified using type.

-   In the [basic component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm), the components of a structured or tabular results are constructed from the components of a structured or tabular parameter struc or itab.

-   In the [variant with lookup table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_using.htm), the components of an internal table itab and a lookup table lookup\_tab are combined to form a tabular result.

The following can be specified for type:

-   A [structured type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructured_type_glosry.htm "Glossary Entry") or a [table type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_type_glosry.htm "Glossary Entry").

-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperand_type_glosry.htm "Glossary Entry"). This specification is only possible if the data type required in an operand position is unique and completely identifiable. The operand type must be a structure type or a table type. When a constructor expression is assigned to a field symbol or a formal parameter with a generic table type, the operand type can only be determined at runtime.

The operator creates structures or internal tables with the specified data type. The components or columns of the result are filled using assignments of components of the parameters specified in the parentheses. The assignments are made using identical names or mapping relationships in a [mapping rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_mapping.htm).

Executable Examples

[Assigning Components: Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_abexas.htm)

Continue
[CORRESPONDING, Basic Form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm)
[CORRESPONDING, Lookup Table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_using.htm)
[CORRESPONDING, mapping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_mapping.htm)
[CORRESPONDING, duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm)