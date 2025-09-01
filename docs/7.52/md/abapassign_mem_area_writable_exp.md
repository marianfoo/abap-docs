  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) → 

ASSIGN - writable\_exp

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_shortref.htm)

Syntax

... [NEW class( ... )->attr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_class.htm) *|* [CAST type( ... )->dobj](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm)
  *|* [table\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm)  ...

Alternatives:

[1\. ... NEW class( ... )->attr *|* CAST type( ... )->dobj](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... table\_exp](#!ABAP_ALTERNATIVE_2@2@)

Effect

The operand position after ASSIGN is a [result position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_position_glosry.htm "Glossary Entry") in which [writable expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified.

Note

Writable expressions can be specified for the memory are but not any other expressions, because only writable expressions can have a non-temporary result. Assigning a temporary data object to a field symbol would not make sense.

Alternative 1

... NEW class( ... )->attr *|* CAST type( ... )->dobj

Effect

This alternative to specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) assigns the result of a [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry")

-   [NEW class( ... )->attr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_class.htm)
    
-   [CAST type( ... )->dobj](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm)
    

to the field symbol. The same rules apply as when [statically specifying](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_static_dobj.htm) the memory area, but no offsets/lengths can be specified.

Notes

-   Assigning an attribute attr of an object created using NEW to a field symbol persists this object as long as the field symbol points to the attribute.
    
-   In this variant, the constructor expression in question sets the return code sy-subrc, not the statement ASSIGN.
    

-   If the object is created successfully, the instance operator NEW sets the return code sy-subrc to 0.

-   The casting operator CAST does not set the return code sy-subrc.

Example

Constructor expression with NEW in the specified memory area of the statement ASSIGN. The assignment of the attribute attr to a field symbol persists the object.

CLASS class DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string VALUE 'foo'.
ENDCLASS.
START-OF-SELECTION.
  ASSIGN NEW class( )->attr TO FIELD-SYMBOL(<fs>).
  cl\_demo\_output=>display( <fs> ).

Example

Constructor expression with CAST in the specified memory area of ASSIGN statements.

TYPES: BEGIN OF t\_struc,
        col1 TYPE i,
        col2 TYPE i,
       END OF t\_struc.
DATA dref TYPE REF TO data.
DATA struc TYPE t\_struc.
dref = NEW t\_struc( ).
ASSIGN CAST t\_struc( dref )->col1 TO FIELD-SYMBOL(<col1>).
ASSIGN CAST t\_struc( dref )->col2 TO FIELD-SYMBOL(<col2>).

Alternative 2

... table\_exp

Effect

This alternative way of specifying the memory area [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) of the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) assigns the result of the [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) or [table expression chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) to the field symbol. The result of a table expression in these positions is always a temporary field symbol.

-   If a single table expression is specified, or a [chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) whose last position is a table expression, the entire row that was found is assigned to the field symbol.

-   If a [chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm) is specified whose last position is a structure component after a structure component selector, this component is assigned to the field symbol. No offsets/lengths, however, can be specified for the structure component here.

In this variant, the statement ASSIGN sets the return code sy-subrc.

-   If the specified row is found, sy-subrc is set to 0.
    
-   If the row is not found, sy-subrc is set to 4, except when the end of the table is reached in binary searches in [sorted tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"). In this case, sy-subrc is set to 8.
    

Unlike when table expressions are used in other ways, the system field sy-tabix is set here in the same way as in a corresponding [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) statement.

If the assignment is not successful, the field symbol keeps its previous state. In this variant, it is therefore not enough just to evaluate the [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [<fs> IS ASSIGNED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_assigned.htm); sy-subrc needs to be checked as well.

In the case of this variant of the statement ASSIGN, the addition [CASTING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) can only be specified in assignments to an existing field symbol and not in [inline declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield-symbol_inline.htm), and only as a standalone addition. The addition [RANGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_range.htm) cannot be specified.

Notes

-   This variant of the statement ASSIGN can be viewed as a different form of [READ TABLE ... ASSIGNING ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_outdesc.htm).
    

-   More specifically, the value of sy-subrc and sy-tabix is set as in the statement READ TABLE and

-   the addition [CASTING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) cannot be specified after an [inline declaration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield-symbol_inline.htm) for the field symbol.

Unlike READ TABLE, chainings can be used here to assign components of read rows or rows from nested internal tables.

-   The constructor operators VALUE and REF used to control the [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_result.htm) of the table expression cannot be used here.
    
-   If the specified row is not found, an exception is not raised (unlike in other uses of table expressions).
    

Example

This example works in the same way as the example for [READ TABLE ... ASSIGNING ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_outdesc.htm). Here, the READ statement is replaced by an ASSIGN statements and the required component is assigned directly.

DATA: carrid TYPE sflight-carrid,
      connid TYPE sflight-connid,
      fldate TYPE sflight-fldate.
...
DATA sflight\_tab TYPE SORTED TABLE OF sflight
                 WITH UNIQUE KEY carrid connid fldate.
SELECT \*
       FROM sflight
       WHERE carrid = @carrid AND
             connid = @connid
       INTO TABLE @sflight\_tab.
IF sy-subrc = 0.
  ASSIGN sflight\_tab\[ KEY primary\_key COMPONENTS
                          carrid = carrid
                          connid = connid
                          fldate = fldate \]-price
         TO FIELD-SYMBOL(<price>).
  IF sy-subrc = 0.
    <price> = <price> \* '0.9'.
  ENDIF.
ENDIF.