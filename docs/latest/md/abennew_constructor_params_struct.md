---
title: "NEW, Structures"
description: |
  Syntax ... NEW dtype#( let_exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm) BASE dobj comp1 = dobj1 comp2 = dobj2 ... ) ... Effect If dtype is a structured data type or # stands for such a type, the individual components can be specified as named
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_struct.htm"
abapFile: "abennew_constructor_params_struct.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abennew", "constructor", "params", "struct"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [NEW, Instance Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20NEW%2C%20Structures%2C%20ABENNEW_CONSTRUCTOR_PARAMS_STRUCT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

NEW, Structures

Syntax

... NEW dtype*|*#( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm)*\]*
                 *\[*BASE dobj*\]*
                 comp1 = dobj1 comp2 = dobj2 ... ) ...

Effect

If dtype is a structured data type or # stands for such a type, the individual components can be specified as named arguments comp1, comp2, ... Each component of the created anonymous data object can be assigned a data object with the same data type as the component, or can be converted to it. The assignment is made for all data types in accordance with the corresponding [assignment rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm).

An addition BASE can be specified in front of the individual component assignments, followed by a data object dobj. dobj is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The type of dobj must be convertible to the type of the anonymous data object. If BASE is specified, the content of dobj is assigned to the anonymous data object before the individual components are assigned. If the character # is specified for the type of the anonymous data object and the type cannot be determined from the operand position of the VALUE expression, the type of dobj is used for this expression if it is known and structured.

dobj1, dobj2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). Optionally, a LET expression [let\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm) can be specified in front of the assignments to define local helper fields that can be used on the right side of the assignments.

If a component is structured itself, either a suitable data object can be assigned to the entire substructure or its components can be specified using the structure component selector (\-). Non-specified components are ignored and keep their type-specific initial value, or the value assigned using BASE. If the addition BASE is used, at least one component must also be specified.

It is not possible to assign multiple values to a component if the component is addressed by the same name. In structures that contain [component groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomponent_group_glosry.htm "Glossary Entry"), the respective components can be addressed as usual as components of the including structures or by using the name of the component group. Then, a component might be assigned more than one value and the latest assignment is respected.

Hints

-   The assignments can be specified in any order in parentheses.
-   If a component with a complex data type is to be constructed in an argument position, the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) can be used. This affects tabular components, for example. This is also possible for structured components but is not necessary since the subcomponents can be addressed using the structure component selector.
-   When a constructor expression is assigned to a reference variable using NEW, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed. In the case of the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_struc.htm), however, the target variable can only be assigned to a helper variable using LET and is then no longer available.

Example

Construction of an anonymous data object with a nested structure type and tabular components. The subcomponents of col2 are addressed directly using the structure component selector. [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) must be used to construct the tabular component col3 because the [syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennew_constructor_params_itab.htm) for constructing internal tables cannot be specified directly as an argument.

TYPES: t\_itab TYPE TABLE OF i WITH EMPTY KEY,
       BEGIN OF t\_struct,
         col1 TYPE i,
         BEGIN OF col2,
           col1 TYPE i,
           col2 TYPE t\_itab,
         END OF col2,
         col3 TYPE t\_itab,
       END OF t\_struct.
DATA itab TYPE t\_itab.
DATA dref TYPE REF TO data.
dref = NEW t\_struct( col1 = 1
                     col2-col1 = 2
                     col2-col2 = itab
                     col3 = VALUE #( ( 1 )
                                     ( 2 )
                                     ( 3 ) ) ).

Example

Use of BASE. The type of the return value of base1 is transferred in the construction of ref1. This is not possible in the construction of ref2, since base2 is not structured. In both results, col1 and col3 have the values xx or zz assigned using BASE, whereas col2 has the directly assigned value BB.

TYPES:
  BEGIN OF struct,
    col1 TYPE c LENGTH 2,
    col2 TYPE c LENGTH 2,
    col3 TYPE c LENGTH 2,
  END OF struct.
FINAL(base1) = VALUE struct( col1 = 'xx' col2 = 'yy' col3 = 'zz' ).
FINAL(ref1)  = NEW #( BASE base1 col2 = 'BB' ).
FINAL(base2)   = \`xxyyzz\`.
FINAL(ref2)  = NEW struct( BASE base2 col2 = 'BB' ).
cl\_demo\_output=>write(   ref1->\* ).
cl\_demo\_output=>display( ref2->\* ).

Example

See also the examples for the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_struc.htm).