  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MOVE-CORRESPONDING%2C%20ABAPMOVE-CORRESPONDING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MOVE-CORRESPONDING

[Short Reference](javascript:call_link\('abapmove-corresponding_shortref.htm'\))

Syntax Forms

Variant for Structures

1\. MOVE-CORRESPONDING *\[*EXACT*\]* struc1 TO struc2
    *\[*EXPANDING NESTED TABLES*\]* *\[*KEEPING TARGET LINES*\]*.

Variant for Internal Tables

2\. MOVE-CORRESPONDING *\[*EXACT*\]* itab1 TO itab2
    *\[*EXPANDING NESTED TABLES*\]* *\[*KEEPING TARGET LINES*\]*.

Variants:

[1\. MOVE-CORRESPONDING struc1 TO struc2.](#!ABAP_VARIANT_1@1@)
[2\. MOVE-CORRESPONDING itab1 TO itab2.](#!ABAP_VARIANT_2@2@)

Additions:

[1\. ... EXACT](#!ABAP_ADDITION_1@1@)
[2\. ... EXPANDING NESTED TABLES](#!ABAP_ADDITION_2@2@)
[3\. ... KEEPING TARGET LINES](#!ABAP_ADDITION_3@3@)

Effect

The statement MOVE-CORRESPONDING is used to assign identically named components of structured data objects to each other. There are two variants of the statements:

-   Both operands are [structures](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry").
-   Both operands are [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry").

No other combinations of operand types are possible. Field symbols typed with the generic type ANY or formal parameters can also be used as operands. An operand of this type must be either a structure or an internal table when the statement is executed and match the other operands, otherwise an uncatchable exception is raised. struc1 and itab1 are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

See the [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry")\-related variant here: to do ...

Hints

-   If mapping based on identical names is not sufficient for the statement MOVE-CORRESPONDING, the component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) can be used, which makes it possible to define separate mapping rules statically.
-   If dynamic mapping rules are needed, the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)) can be used.
-   If an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") is specified for one of the operands, the header line is used as an operand in accordance with its data type and not the table body.

Variant 1   

MOVE-CORRESPONDING struc1 TO struc2.

Effect

This variant of the statement MOVE-CORRESPONDING requires [structures](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") to be specified for struc1 and struc2. As operands of the statement MOVE-CORRESPONDING, [meshes](javascript:call_link\('abenmesh_glosry.htm'\) "Glossary Entry") are handled like regular structures and can also be specified.

The system searches for all identically named components in struc1 and struc2 and the content of components in struc1 is assigned to the identically named components in struc2. Other components are not affected. If field symbols are used as operands, the names of the components are evaluated in accordance with the data type of the field symbols, which can be distinguished by [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") the names of the actual structures.

Nested structures are fully resolved. The names of the components are compared down to the lowest common level. If the addition EXPANDING NESTED TABLES is not specified, the following statement is executed identically for each named component pair comp:

[struc2-comp = struc1-comp.](javascript:call_link\('abapmove.htm'\))

Any associated conversions are performed, and the corresponding exceptions may be raised. In particular, if the components are table-like, the entire table body is assigned in accordance with the [conversion rules for internal tables](javascript:call_link\('abenconversion_itab.htm'\)).

If struc1 or struc2 are empty [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") when the statement is executed (that is they do not contain any components), the statement is ignored. If struc1 is a structure that contains empty customizing includes as components, these are also ignored when the structure is evaluated.

Hints

-   If structures are specified for struc1 and struc2 that are known statically, the names are compared once when the program is generated by the ABAP Compiler. If untyped field symbols or formal parameters are used, the associated names comparison must be performed each time the statement is executed.
-   The compiler optimizes the MOVE-CORRESPONDING statement for structures so that sequences of components that have the same names in both structures are grouped and copied together. It is therefore recommended that the involved structures are constructed in the same way if possible.
-   MOVE-CORRESPONDING for structures ignores names that were only defined with the AS name addition of the [INCLUDE](javascript:call_link\('abapinclude_type.htm'\)) statement or when structures were included in the ABAP Dictionary. Any components renamed using the addition RENAMING WITH SUFFIX of the statement INCLUDE or renamed similarly in the ABAP Dictionary are, however, not ignored.
-   Field symbols that point to structures can have different names for the components than the structure itself, as specified by the [CASTING](javascript:call_link\('abapassign_casting.htm'\)) addition of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). The statement MOVE-CORRESPONDING evaluates the names of the data type of the current operand. This means that components in the same structure can also be assigned to each other. Note that the order of processing and therefore the result in a component that is used both as a source and as a target is usually undefined. No temporary interim result is created, and it is not possible to exchange the content of two components of the same structure in a single statement.
-   See the executable example [Reflexive Component Assignments](javascript:call_link\('abenreflexive_corresponding_abexa.htm'\)).

Example

This example shows how MOVE-CORRESPONDING is applied to two structures with the same type t\_str and which are cast using field symbols with different types. The statement evaluates the names of the types of the field symbols, whereby the content of components that actually have different names are assigned.

TYPES: BEGIN OF t\_str,
         a1 TYPE i,
         a2 TYPE i,
       END OF t\_str.
TYPES: BEGIN OF t\_str1,
         b1 TYPE i,
         b2 TYPE i,
       END OF t\_str1.
TYPES: BEGIN OF t\_str2,
         b2 TYPE i,
         b1 TYPE i,
       END OF t\_str2.
FINAL(str1) = VALUE t\_str( a1 = 1 a2 = 2 ).
DATA str2 LIKE str1.
FIELD-SYMBOLS <fs1> TYPE t\_str1.
ASSIGN str1 TO <fs1> CASTING.
FIELD-SYMBOLS <fs2> TYPE t\_str2.
ASSIGN str2 TO <fs2> CASTING.
MOVE-CORRESPONDING <fs1> TO <fs2>.
cl\_demo\_output=>write(   str1 ).
cl\_demo\_output=>display( str2 ).

Variant 2   

MOVE-CORRESPONDING itab1 TO itab2.

Effect

This variant of the statement MOVE-CORRESPONDING requires [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") to be specified for itab1 and itab2. It searches for all identically named components in the line types of itab1 and itab2 and assigns them from itab1 to itab2 in accordance with the rules below.

-   If the line type is structured, the components are the structure components.
-   A non-structured line type is handled like a structure with a single component. The type of the component is the line type of the internal table, that is, elementary, a table itself, or a reference variable. The component has an internal name that is the same for all tables.

If there are identically named components, the target table itab2 is deleted without the addition KEEPING TARGET LINES and the same number of initial lines are inserted as exist in the source table itab1. The lines of the source table are then read sequentially in the same order as in the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), and the content of each line is assigned to the corresponding line in the target table in accordance with the rules for using EXACT with structures. Finally, and if necessary, the [table keys](javascript:call_link\('abenitab_key.htm'\)) and associated [table indexes](javascript:call_link\('abentable_index_glosry.htm'\) "Glossary Entry") are updated in the target table in accordance with the rules for [insertions in internal tables](javascript:call_link\('abapinsert_itab.htm'\)). The corresponding exceptions are raised if uniqueness is violated.

If there are no identically named components, no assignment is made and the target table remains unchanged.

Hints

-   MOVE-CORRESPONDING is always ignored when an internal table with a non-structured line type is assigned to an internal table with a structured line type and vice versa.
-   Without additions, MOVE-CORRESPONDING has the same effect on the assignment of an internal table with non-structured line type to a similar table as a regular [assignment](javascript:call_link\('abapmove.htm'\)).
-   If an internal table itab is assigned to itself using MOVE-CORRESPONDING, the statement is ignored. This also means that the lines are not deleted first and then filled again.
-   The convertibility of the components, if it is known, is checked statically. If the convertibility cannot be determined statically, a runtime error is only raised if an assignment is actually performed.

Example

Assignment of four identically named components of standard table spfli\_tab to a sorted table flights.

TYPES:
  BEGIN OF flight,
    carrid   TYPE spfli-carrid,
    connid   TYPE spfli-connid,
    cityfrom TYPE spfli-cityfrom,
    cityto   TYPE spfli-cityto,
  END OF flight.
DATA
  flights TYPE SORTED TABLE OF flight WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @FINAL(spfli\_tab).
MOVE-CORRESPONDING spfli\_tab TO flights.
cl\_demo\_output=>display( flights ).

Addition 1   

... EXACT

Effect

Variant for Structures

If the addition EXACT is specified for MOVE-CORRESPONDING, the following [lossless assignment](javascript:call_link\('abenlossless_move.htm'\)) is performed for each identically named component pair comp

struc2-comp = [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) #( struc1-comp ).

and the corresponding checks are performed. If an exception is raised, all components are assigned up to the component that raised the exception. This component, and all following components, are not assigned.

Variant for Internal Tables

If the source table contains valid values in all components of the internal table line and no values are lost, the conversion is performed in accordance with the associated conversion rules. This check is performed line-wise beginning with the first line of the internal table. If at least one component of the line causes a conversion error, the whole line is not assigned and none of the following lines either. In that case, initial lines are added to the target table.

Example

The following example demonstrates assignments with MOVE-CORRESPONDING EXACT and internal tables. One of the internal tables that is filled for demonstration purposes before the assignment purposely includes a component value (component b has a value including three characters which is not compatible with ... b TYPE c LENGTH 2 ...) for which a lossless assignment fails. The output shows that up to this line, the assignment works. For the table line for which the assignment error happens and all of the following lines, no assignments are made. There are only initial lines added to the target table.

TYPES:
  BEGIN OF struc1,
    a TYPE c LENGTH 3,
    b TYPE c LENGTH 3,
    c TYPE i,
  END OF struc1,
  BEGIN OF struc2,
    a TYPE c LENGTH 2,
    b TYPE c LENGTH 2,
    c TYPE i,
  END OF struc2,
  BEGIN OF struc3,
    a TYPE c LENGTH 3,
    b TYPE c LENGTH 3,
    c TYPE i,
  END OF struc3.
DATA itab1 TYPE TABLE OF struc1 WITH EMPTY KEY.
DATA itab2 TYPE TABLE OF struc2 WITH EMPTY KEY.
DATA itab3 TYPE TABLE OF struc3 WITH EMPTY KEY.
itab1 = VALUE #( ( a = \`aa\` b = \`bb\` c = 123 )
                 ( a = \`cc\` b = \`ddd\` c = 456 )
                 ( a = \`ee\` b = \`ff\` c = 789 ) ).
TRY.
    MOVE-CORRESPONDING EXACT itab1 TO itab2.
  CATCH cx\_sy\_conversion\_data\_loss INTO DATA(error).
ENDTRY.
IF error IS NOT INITIAL.
  cl\_demo\_output=>write( error->get\_text( ) ).
ENDIF.
cl\_demo\_output=>write( itab2 ).
TRY.
    MOVE-CORRESPONDING EXACT itab1 TO itab3.
  CATCH cx\_sy\_conversion\_data\_loss INTO DATA(error2).
ENDTRY.
IF error2 IS NOT INITIAL.
  cl\_demo\_output=>write( error2->get\_text( ) ).
ENDIF.
cl\_demo\_output=>write( itab3 ).
cl\_demo\_output=>display(  ).

Addition 2   

... EXPANDING NESTED TABLES

Effect

Variant for Structures

With this addition, two identically named components, that are both internal tables, are not simply assigned. Instead, for these components, the statement MOVE-CORRESPONDING *\[*EXACT*\]* for internal tables with the addition EXPANDING NESTED TABLES and without the addition KEEPING TARGET LINES is executed.

Tabular components are resolved at every hierarchy level and identically named components are assigned line by line. The target tables are deleted before an assignment.

Hint

If one of two identically named components is an internal table and the other is not, MOVE-CORRESPONDING is never possible, regardless of whether EXPANDING NESTED TABLES is used.

Example

In the following example, the structure struc1 contains the components:

-   struc1-comp1
-   struc1-struci-comp1
-   struc1-struci-comp2-col1
-   struc1-struci-comp2-col2
-   struc1-itab

The structure struc2 contains the components:

-   struc2-struci-comp1
-   struc2-struci-comp2
-   struc2-struci-comp3
-   struc2-itab

Over the length of the shorter path, the components struci-comp1, struci-comp2, and itab have the same name. These are assigned from struc1 to struc2 in both MOVE-CORRESPONDING statements. In struc1, struci-comp2 is self-structured; in struc2, struci-comp2 is elementary. When struc1-struci-comp2 is assigned to struc2-struci-comp2, the source field is interpreted as an elementary field of type c in accordance with the conversion rules for structures.

The components itab are table-like and have compatible line types. The statement MOVE-CORRESPONDING without the addition EXPANDING NESTED TABLE is used to assign the table body and the content of itab in struc2 then matches the content of itab in struc1. If the addition EXPANDING NESTED TABLE is used, only the component col2 is assigned and col3 remains initial.

The components struc1-comp1 and struc2-struci-comp3 do not have any equivalents with the same name and are ignored in the assignment.

TYPES: BEGIN OF line1,
         col1 TYPE i,
         col2 TYPE i,
       END OF line1,
       BEGIN OF line2,
         col2 TYPE i,
         col3 TYPE i,
       END OF line2.
DATA: BEGIN OF struc1,
        comp1 TYPE c LENGTH 1 VALUE 'U',
        BEGIN OF struci,
          comp1 TYPE c LENGTH 1 VALUE 'V',
          BEGIN OF comp2,
            col1 TYPE c LENGTH 1 VALUE 'X',
            col2 TYPE c LENGTH 1 VALUE 'Y',
          END OF comp2,
        END OF struci,
        itab TYPE TABLE OF line1 WITH EMPTY KEY,
     END OF struc1.
DATA: BEGIN OF struc2,
        BEGIN OF struci,
          comp1 TYPE string,
          comp2 TYPE string,
          comp3 TYPE string,
        END OF struci,
        itab TYPE TABLE OF line2 WITH EMPTY KEY,
     END OF struc2.
struc1-itab = VALUE #(
  ( col1 = 11 col2 = 12 )
  ( col1 = 21 col2 = 22 ) ).
MOVE-CORRESPONDING struc1 TO struc2.
MOVE-CORRESPONDING struc1 TO struc2 EXPANDING NESTED TABLES.

Variant for Internal Tables

If this addition is specified, the individual lines are assigned in accordance with the rules for MOVE-CORRESPONDING *\[*EXACT*\]* with EXPANDING NESTED TABLES specified, and tabular components are resolved at every hierarchy level.

If the addition is not specified, the individual lines are assigned in accordance with the rules for MOVE-CORRESPONDING *\[*EXACT*\]* without EXPANDING NESTED TABLES specified, and tabular components are assigned in accordance with the [rules](javascript:call_link\('abenconversion_itab.htm'\)) for [assignments](javascript:call_link\('abapmove.htm'\)) or [lossless assignments](javascript:call_link\('abapmove_exact.htm'\)).

Addition 3   

... KEEPING TARGET LINES

Effect

Variant for Structures

This addition affects two identically named components that are both internal tables. It ensures that the nested target tables in struc2 are not deleted. Furthermore, it appends the lines of the nested source tables in struc1 by executing the statement MOVE-CORRESPONDING \[EXACT\] for internal tables without an addition.

Hints

-   The entire table bodies of the nested source tables are assigned in accordance with the [conversion rules for internal tables](javascript:call_link\('abenconversion_itab.htm'\)).
-   The use of ... EXPANDING NESTED TABLES KEEPING TARGET LINES with structures affects two identically named components that are both internal tables. It ensures that the nested target tables in struc2 are not deleted. Furthermore, it appends the lines of the nested source tables in struc1 by executing the statement MOVE-CORRESPONDING \[EXACT\] EXPANDING NESTED TABLES for internal tables without an addition.

Variant for Internal Tables

This addition ensures that the target table itab2 is not deleted. Instead, it appends the same number of initial lines as exist in the source table itab1 and assigns the lines of the source table to these initial lines. The table keys and indexes are then updated across all lines. If no identically named components are found, the target table remains unchanged.

Hint

The addition KEEPING TARGET LINES is only effective on the lines of itab2. It cannot be effective on nested tables, even if it is specified with the addition EXPANDING NESTED TABLES. This is because nested tables are always resolved in new initial lines.

Uncatchable Exceptions

-   Cause: The operands are not both structures or internal tables.
    Runtime error: TCHK\_MOVE\_CORRESPONDING:
-   The same runtime errors can occur as for [MOVE](javascript:call_link\('abapmove.htm'\)) and [MOVE EXACT](javascript:call_link\('abapmove_exact.htm'\)).
-   The same runtime errors can occur as for [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)).

Executable Examples

-   [MOVE-CORRESPONDING for Structures](javascript:call_link\('abenmove_corresponding_struc_abexa.htm'\))
-   [Variants of MOVE-CORRESPONDING and the CORRESPONDING operator using deep structures](javascript:call_link\('abencorresponding_variants_s_abexa.htm'\))
-   [MOVE-CORRESPONDING for Internal Tables](javascript:call_link\('abenmove_corresponding_abexa.htm'\))