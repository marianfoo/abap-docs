  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding.htm) →  [CORRESPONDING - Component Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_corresponding.htm) → 

CORRESPONDING - Lookup table

Syntax

... CORRESPONDING dtype*|*#( itab FROM lookup\_tab
                                USING *\[*KEY key\_name*\]* s1 = t1 s2 = t2 ...
                                *\[*[mapping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding_constr_mapping.htm)*\]*  ) ...

Effect

This variant of the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_corresponding.htm) can only be used for internal tables. The expression constructs an internal table from the components of the internal table itab and a lookup table lookup\_tab. The lines of the internal table come from a comparison of itab and lookup\_tab. The target type specified using dtype or # must be a table type. The parameters itab and lookup\_tab expect internal tables whose row type must be structured. Also, itab must be convertible to the target type. itab and lookup\_tab are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

The result of the expression is created in the following steps:

-   First, an intermediate result of the type of the internal table itab is constructed as follows: For each row in itab, a row is searched for in lookup table lookup\_tab that has the same content in the columns s1, s2, ... as the columns t1, t2, ... of the row in itab. The search must take place using a sorted table key or a hash key (see below). If the key is not unique, the first row found is used.

-   If no row like this is found, a row with the unchanged content of the row in itab is inserted into the intermediate result.

-   If a row like this is found, a row is inserted into the intermediate result that is the result of an assignment of the row found in itab to the current row in lookup\_tab. By default, the assignment is made in accordance with the rules of [MOVE-CORRESPONDING for structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding_structure.htm) with the addition EXPANDING NESTED TABLES, with the exception that the components used for searches are not assigned by default: The components s1, s2, ... from lookup\_tab used for searches are by default not assigned to the identically named components of itab and the components t1, t2, ... from itab used for searches are not assigned the identically named components from lookup\_tab.

-   The intermediate result of the type of the table itab is assigned to the result of the expression in accordance with the regular [assignment rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm) for internal tables and, if necessary, converted to the target type.

This means that the component by component assignment takes place between the lookup table lookup\_tab as the source table and an intermediate result with the type of itab as the target table. A mapping rule [mapping](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding_constr_mapping.htm) can be used to override the default assignment of identically named components and the default exclusion of the components s1, s2, ... and t1, t2, ... It is not possible to specify the same internal table for itab and lookup\_tab, otherwise there can be a runtime error CORRESPONDING\_SELF.

The search for the row in lookup\_tab must take place using a sorted table key or a hash key:

-   If the addition KEY is not specified, a sorted table or a hashed table must be specified for lookup\_tab.

-   If the addition KEY is specified, the key key\_name specified after it is used. The following can be specified for key\_name:

-   A [secondary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_key_glosry.htm "Glossary Entry") using its name

-   The primary key using its predefined name primary\_key or using an alias. If the primary key is specified, lookup\_tab must be a sorted table or a hashed table.

The comparison fields s1, s2, ... must cover the full table key.

Notes

-   Unlike the [basic form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding_constr_arg_type.htm), this variant does not have the addition DEEP. Instead, it always behaves as if DEEP were specified. The addition BASE cannot be specified either.

-   Generally, the type of itab and the target type must be identical.

-   In one common use case, an existing internal table itab is enriched with information from the lookup table lookup\_tab. Here, the constructor expression is assigned to the same internal table as specified for itab. In this case, the expression is optimized internally to work directly with itab without creating an intermediate result.

-   If the constructor expression is not assigned to the internal table specified for itab or if this table is not known statically, the temporary intermediate result with the type itab must be created in full. This produces a syntax check warning that can be hidden by a pragma.

-   If the same table is specified for itab and lookup\_tab, a temporary copy of the table must be created as a target table of the assignment and a syntax check warning that can be hidden is produced here too. If this is not detected until runtime, the information needed to create the necessary temporary copy of the target object is missing and runtime error CORRESPONDING\_SELF occurs.

Example

Rows of internal table itab1 that are present in internal table itab2 are passed to itab1.

TYPES:
  BEGIN OF line,
    value   TYPE i,
    comment TYPE string,
  END OF line,
  itab1 type STANDARD TABLE OF line WITH EMPTY KEY,
  itab2 TYPE HASHED TABLE OF line WITH UNIQUE KEY value.
DATA(itab1) = VALUE itab1( for i = 1 UNTIL i >= 10 ( value = i ) ).
DATA(itab2) = VALUE itab2( ( value = 2 comment = \`...\` )
                           ( value = 3 comment = \`...\` )
                           ( value = 5 comment = \`...\` )
                           ( value = 8 comment = \`...\` ) ).
itab1 = CORRESPONDING itab1( itab1 FROM itab2 USING value = value ).
cl\_demo\_output=>display( itab1 ).

Executable Examples

-   [Component operator, lookup table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding_using_abexa.htm)

-   [Component Operator, Reflexive Assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding_using_self_abexa.htm)