  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) →  [CORRESPONDING, Component Operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) → 

CORRESPONDING, mapping

Syntax

... *\[* MAPPING *{*t1 = s1 *\[* [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm)*\]**}**|*( t1 = s1 *\[* [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm)*\]* *\[*MAPPING ...*\]* *\[*EXCEPT ...*\]* )
              *{*t2 = s2 *\[* [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm)*\]**}**|*( t2 = s2 *\[* [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm)*\]* *\[*MAPPING ...*\]* *\[*EXCEPT ...*\]* )
              ...  *\]*
    *\[* EXCEPT *{*ti tj ...*}**|*\* *\]* ...

Additions:

[1\. ... MAPPING  t1 = s1 *\[*duplicates*\]* t2 = s2 *\[*duplicates*\]* ...](#!ABAP_ADDITION_1@1@)
[2\. ... EXCEPT  *{*t1 t2 ...*}**|*\*](#!ABAP_ADDITION_2@2@)

Effect

Mapping rule for the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm). The optional mapping rule overrides the default assignment of identically named components only. The additions MAPPING and EXCEPT can be used individually or together. EXCEPT must always be specified after MAPPING.

Hints

-   It is best to use the component operator (see the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_vs_for_abexa.htm)) for mapping tasks that can be solved using either the component operator or [table comprehensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

-   When using the [basic form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm) with a mapping rule, assignments can currently only be made to the same structure or internal table specified as an argument if this is known statically. The information need to create the necessary temporary copy of the target object is missing at runtime and a runtime error occurs.

-   The system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_corresponding.htm) is available for assignments between structures or internal tables with a dynamic mapping rule.
    

Addition 1

... MAPPING  t1 = s1 *\[*duplicates*\]* t2 = s2 *\[*duplicates*\]* ...

Effect

After MAPPING, the components s1, s2,... of a source structure or source table in mapping relationships are assigned to the components of a target structure or target table t1, t2, ....

If the components specified on the left and right of an equal sign of a mapping relationship are themselves structured or tabular with a structured line type, a separate mapping rule can be nested for them. Here, the mapping relationship is set in parentheses ( ... ) and a further mapping rule MAPPING ... and/or EXCEPT ... is specified after the mapping relationship in accordance with the same rules as on the top level. The parentheses are not allowed if a nested mapping rule is not used.

If the components specified to the left and right of an equal sign of a mapping relationship are tabular, the addition [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm) can be used to control the behavior used when duplicate lines appear in target tables with unique table keys.

A component of a target object cannot occur more than once in a list after MAPPING and the structure component selector cannot be used to access subcomponents. This is allowed for components of the source object. If MAPPING is used, the table types involved must also have structured line types in the [basic form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm) and the addition DEEP is set implicitly.

-   In the [basic form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_arg_type.htm), t1, t2, ... are components of the target type and s1, s2, ... are components of the parameter struct or itab.

-   In the [variant with lookup table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_using.htm), t1, t2, ... are columns of the parameter itab and s1, s2, ... are columns of the parameter lookup\_tab.

The content of the component specified on the right side of an equal sign in a mapping relationship is assigned to each component specified on the left side. If there is an identically named component in the target structure for a component specified on the right side, it is also assigned content, unless it is listed on the left side of a mapping relationship itself. In elementary components, the assignment is made in accordance with the associated [assignment rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm). In structured and tabular components, the assignment is made in accordance with the rules of [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove-corresponding.htm) with the addition EXPANDING NESTED TABLES.

Identically named components can also be listed on the right and left side of the equal sign of a mapping relationship. This is a good idea in the following cases:

-   If the [variant with lookup table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_using.htm) are used, identically named components in a mapping relationship override the rule that the components s1, s2, ... and t1, t2, ... used for searches are not assigned by default.

-   Identically named components must be listed in a mapping relationship if a nested mapping rule is to be specified for these components.

-   Identically named tabular components can be listed in a mapping relationship to control the behavior of duplicate lines using [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_constr_dupl.htm).

If the line type of a source table is elementary, the [pseudo component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line can be specified as a component on the right of an equal sign of a mapping relationship and the entire table line is mapped to the target component. In all other cases, the behavior is undefined when the pseudo component table\_line is specified.

Example

Assignment of the components of the structure struct1 to the components of the structure struct2 using mapping rules for the components at the top level and the components of the substructure.

DATA: BEGIN OF struct1,
        mcomp1 TYPE i VALUE 1,
        mcomp2 TYPE i VALUE 2,
        BEGIN OF substruc,
          subcomp1 TYPE i VALUE 1,
          subcomp2 TYPE i VALUE 2,
          subcomp3 TYPE i VALUE 3,
        END OF substruc,
      END OF struct1.
DATA: BEGIN OF struct2 ,
        comp2 TYPE i,
        comp1 TYPE i,
        BEGIN OF substruc,
          comp3 TYPE i,
          comp2 TYPE i,
          comp1 TYPE i,
        END OF substruc,
      END OF struct2.
struct2 =
  CORRESPONDING #(
    struct1 MAPPING comp1    = mcomp1
                    comp2    = mcomp2
                  ( substruc = substruc MAPPING comp1 = subcomp1
                                                comp2 = subcomp2
                                                comp3 = subcomp3 ) ) .

Example

Specification of the [pseudo component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line as the right side of a mapping rule.

TYPES:
  itab1 TYPE STANDARD TABLE OF i WITH EMPTY KEY,
  BEGIN OF struct,
    col1 TYPE i,
    col2 TYPE string,
  END OF struct,
  itab2 TYPE STANDARD TABLE OF struct WITH EMPTY KEY.
cl\_demo\_output=>display(
  CORRESPONDING itab2( VALUE itab1( ( 1 ) ( 2 ) ( 3 ) )
                       MAPPING col1 = table\_line ) ).

Executable Examples

-   [Component Operator, Mapping Rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_mapping_abexa.htm)

-   [Component Operator, Nested Mapping Rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_deep_mapp_abexa.htm)
    

Addition 2

... EXCEPT  *{*t1 t2 ...*}**|*\*

Effect

After EXCEPT, components t1, t2, ... of the target structure or target table that are not listed in a preceding mapping relationship or an asterisk, \*, can be specified:

-   If explicit components t1, t2, ... are listed, these components of the result are not assigned content and remain initial.

-   If an asterisk, \*, is listed, all components of the result remain initial that are not specified explicitly in a preceding mapping relationship.

Access to subcomponents of components of the target object using the structure component selector is also not allowed in the list after EXCEPT either.

If components of the target structure are included using [INCLUDE TYPE*|*STRUCTURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_type.htm) and these components are assigned a name using [AS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinclude_type.htm), this name can be specified after EXCEPT. If the included structure has only one component, specifying the name is the same as specifying this component. If the included structure has more than one component, the specified name is ignored.

Hints

-   If there are identically named components in the source and target object that are not compatible or convertible, they can be excluded from the assignment using EXCEPT. This avoids syntax errors or runtime errors.

-   If EXCEPT \* is specified without preceding mapping relationships, all components of the result remain initial.

Example

Effect of the addition EXCEPT. In struct3, the components col2 and col3 remain initial.

DATA:
  BEGIN OF struct1,
    col1 TYPE string VALUE \`COL1\`,
    col2 TYPE string VALUE \`COL2\`,
    col3 TYPE string VALUE \`COL3\`,
    col4 TYPE string VALUE \`COL4\`,
  END OF struct1,
  BEGIN OF struct2,
    col4 TYPE string,
    col3 TYPE string,
    col2 TYPE string,
    col1 TYPE string,
  END OF struct2,
  struct3 LIKE struct2.
struct2 = CORRESPONDING #( struct1 ).
struct3 = CORRESPONDING #( struct1 EXCEPT col2 col3 ).
  cl\_demo\_output=>new(
    )->write(   struct1
    )->write(   struct2
    )->display( struct3 ).

Executable Examples

-   [Component Operator, Mapping Rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_mapping_abexa.htm)

-   [Component Operator, Nested Mapping Rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_deep_mapp_abexa.htm)