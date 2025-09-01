  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Names for Individual Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Chainings

In cases where operands are composed of components that themselves contain components, the names of these components are composed of chainings with multiple component selectors. The following rules apply to these [chained names](javascript:call_link\('abenchained_name_glosry.htm'\) "Glossary Entry"):

-   The names on the left of each structure component selector must, as a composite group, address a structured data type or a structure.

-   The names on the left of each object component selector must, as a composite group, address a reference variable.

-   The class component selector can occur in a name exactly once as the first selector.

-   The interface component selector can only occur more than once in a name if other component selectors are specified between the individual interface component selectors.

Note

As well as the chaining of names, the following chainings are possible:

-   [Method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") with the object component selector

-   [Chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) of [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")

Chainings can be combined in any way as long as their rules are respected.

Example

Declares a nested structured data type struc2 in struc1 and a structure struc3 in an interface i1.

The component comp of struc3 is a data reference variable of the static type struc1. The i1 interface is the component interface of i2 and the latter is implemented in c1. In c2, a [static attribute](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") is declared as the object reference of the static type c1. The expression in the last line can be in an operand position that expects a data object, and names the component comp of the structure struc2 in a chaining that starts at class c2. A prerequisite for use of the expression is that both reference variables, oref and dref, point to the respective instances.

INTERFACE i1.
  TYPES: BEGIN OF struc1,
           ...
           BEGIN OF struc2,
             ...,
             comp TYPE ...,
             ...,
           END OF struc2,
           ...
         END OF struc1.
  DATA: BEGIN OF struc3,
          ...
          dref TYPE REF TO struc1,
          ...
        END OF struc3.
ENDINTERFACE.
INTERFACE i2.
  INTERFACES i1.
ENDINTERFACE.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES i2.
ENDCLASS.
CLASS c2 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA oref TYPE REF TO c1.
ENDCLASS.
...
... c2=>oref->i1~struc3-dref->struc2-comp ...