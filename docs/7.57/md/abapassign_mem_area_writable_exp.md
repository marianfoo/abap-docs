  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Assigning Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN, mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ASSIGN, writable_exp, ABAPASSIGN_MEM_AREA_WRITABLE_EXP, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

ASSIGN, writable\_exp

[Short Reference](javascript:call_link\('abapassign_shortref.htm'\))

Syntax Forms

Constructor Expressions

1\. ... NEW class( ... )->attr*|*(attr\_name) ...

2\. ... CAST type( ... )->\**|*dobj*|*(dobj\_name) ...

Table Expressions

3\. ... table\_exp ...

Alternatives:

[1\. ... NEW class( ... )->attr*|*(attr\_name)](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... CAST type( ... )->...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... table\_exp](#!ABAP_ALTERNATIVE_3@3@)

Effect

These variants for specifying the memory area [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)). exploit the fact that the operand position after ASSIGN is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry") in which [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified.

Hints

-   Writable expressions can be specified for the memory area but no other expressions, because only writable expressions can have a non-temporary result. Assigning a temporary data object to a field symbol would not make sense.
-   Writable expressions cannot be specified dynamically in a data object [name](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\)).

Alternative 1   

... NEW class( ... )->attr*|*(attr\_name)

Effect

This variant for specifying the memory area [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) assigns the result of the [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") [NEW class( ... )](javascript:call_link\('abennew_constructor_params_class.htm'\)) followed by the object component selector \-> pointing to an attribute of a class class to a field symbol.

The attribute can be specified statically as attr or dynamically as the content of a character-like data object attr\_name in parentheses.

-   For static specification attr, the same rules apply as to [statically specifying](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)) the memory area, but no offsets/lengths can be specified and sy-subrc is not set by the ASSIGN statement itself.
-   For dynamic specification, the rules of a [dynamic target](javascript:call_link\('abenobject_component_selector.htm'\)) behind the object component selector apply.

In this variant, the return code sy-subrc is not set by the statement ASSIGN itself, but by the constructor expression. The instance operator NEW sets the return code sy-subrc to 0, if the object is created successfully.

If the attribute specified dynamically in attr\_name is not found, an exception of class CX\_SY\_ASSIGN\_ILLEGAL\_COMPONENT is raised. An assignment of the constructor operator NEW is either successful or leads to an exception and the addition ELSE UNASSIGN cannot be used. In case of an exception, an existing field symbol keeps it previous state.

Hint

Assigning an attribute attr of an object created using NEW to a field symbol persists this object as long as the field symbol points to the attribute.

Example

Constructor expression with NEW in the specified memory area of statement ASSIGN statements. The assignment of the attribute attr to a field symbol persists the object. In the first assignment the attribute is specified statically, in the following it is specified dynamically. The third assignment raises an exception since the attribute is not found.

CLASS class DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string VALUE 'foo'.
ENDCLASS.
START-OF-SELECTION.
  ASSIGN NEW class( )->attr TO FIELD-SYMBOL(<fs1>).
  cl\_demo\_output=>write( <fs1> ).
  ASSIGN NEW class( )->('attr') TO FIELD-SYMBOL(<fs2>).
  cl\_demo\_output=>write( <fs2> ).
  TRY.
      ASSIGN NEW class( )->('foo') TO FIELD-SYMBOL(<fs3>).
      cl\_demo\_output=>write( <fs3> ).
    CATCH cx\_sy\_assign\_illegal\_component INTO FINAL(exc).
      cl\_demo\_output=>write( exc->get\_text( ) ).
  ENDTRY.
  cl\_demo\_output=>display( ).

Alternative 2   

... CAST type( ... )->...

Effect

This variant for specifying the memory area [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) assigns the result of the [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") [CAST type( ... )](javascript:call_link\('abenconstructor_expression_cast.htm'\)) followed by the dereferencing operator dref->\* or the object component selector \-> to a field symbol. For type, a data type or an object type (class or interface) can be specified.

The data object assigned to the field symbol can be specified with the following [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) expressions:

-   CAST dtype( ... dref )->\*
-   CAST dtype( ... dref )->comp|('comp\_name')
-   CAST class|intf( ... oref )->attr|('attr\_name')

The same rules apply as described for [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) with the exception that no [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") can be specified. Especially, the system behavior in case of an error is governed by the CAST expression. The return code sy-subrc is not set. An assignment of the constructor operator CAST is either successful or leads to an exception and the addition ELSE UNASSIGN must not be used. If an exception occurs, an existing field symbol keeps it previous state.

Hint

In the ASSIGN statement, the CAST operator cannot be used for calling a method.

Example

This example is the same as one shown under [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)). Instead of assigning CAST expressions to data objects, they are assigned to field symbols here. The example shows that the system behavior in the case of an error in the CAST expression is the same in both examples.

TYPES:
  BEGIN OF struc,
    col TYPE i,
  END OF struc.
INTERFACE intf.
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
    DATA attr TYPE string VALUE 'foo'.
ENDCLASS.
DATA dref TYPE REF TO data.
DATA iref TYPE REF TO intf.
dref = NEW struc( col = 111 ).
iref = NEW cls( ).
ASSIGN CAST struc( dref )->col TO FIELD-SYMBOL(<num>).
ASSERT <num> = 111.
ASSIGN CAST cls( iref )->attr TO FIELD-SYMBOL(<txt>).
ASSERT <txt> = 'foo'.
UNASSIGN <num>.
ASSIGN CAST struc( dref )->('col') TO <num>.
ASSERT <num> = 111.
UNASSIGN <txt>.
ASSIGN CAST cls( iref )->('attr') TO <txt>.
ASSERT <txt> = 'foo'.
DATA(exc) = 0.
TRY.
    ASSIGN CAST struc( dref )->('foo') TO <num>.
  CATCH cx\_sy\_assign\_illegal\_component.
    exc += 1.
ENDTRY.
TRY.
    ASSIGN CAST cls( iref )->('foo') TO <txt>.
  CATCH cx\_sy\_assign\_illegal\_component.
    exc += 1.
ENDTRY.
CLEAR dref.
TRY.
    ASSIGN CAST struc( dref )->('col') TO <num>.
  CATCH cx\_sy\_assign\_illegal\_component.
    exc += 1.
ENDTRY.
CLEAR iref.
TRY.
    ASSIGN CAST cls( iref )->('attr') TO <txt>.
  CATCH cx\_sy\_assign\_illegal\_component.
    exc += 1.
ENDTRY.
ASSERT exc = 4.
"Runtime error DATREF\_NOT\_ASSIGNED
"ASSIGN CAST struc( dref )->col TO <num>.
"Runtime error OBJECTS\_OBJREF\_NOT\_ASSIGNED
"ASSIGN CAST cls( iref )->attr TO <txt>.

Alternative 3   

... table\_exp

Effect

This variant for specifying the memory area [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) of the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) assigns the result of the [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [table\_exp](javascript:call_link\('abentable_expressions.htm'\)) or [table expression chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) to the field symbol. The result of a table expression in these positions is always a temporary field symbol.

-   If a single table expression is specified, or a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose last position is a table expression, the entire line found is assigned to the field symbol.
-   If a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) is specified whose last position is a structure component after a structure component selector, this component is assigned to the field symbol. No offsets/lengths, however, can be specified for the structure component here.

In this variant, the statement ASSIGN sets the return code sy-subrc.

-   If the specified line is found, sy-subrc is set to 0.
-   If the assignment is not successful, sy-subrc is set to 4, except when the end of the table is reached in binary searches in [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"). In this case, sy-subrc is set to 8. If sy-subrc is set to 4 or 8, the state of the field symbol depends on the addition [ELSE UNASSIGN](javascript:call_link\('abapassign_else_unassign.htm'\)):
    -   If ELSE UNASSIGN is not specified, the field symbol keeps its previous state.
    -   If ELSE UNASSIGN is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the ASSIGN statement.

Unlike in other use cases of table expressions, the system field sy-tabix is set here in the same way as in a corresponding [READ TABLE](javascript:call_link\('abapread_table.htm'\)) statement.

In this variant of the statement ASSIGN, the addition [CASTING](javascript:call_link\('abapassign_casting.htm'\)) can only be specified in assignments to an existing field symbol and not in [inline declarations](javascript:call_link\('abenfield-symbol_inline.htm'\)), and only as a standalone addition. The addition [RANGE](javascript:call_link\('abapassign_range.htm'\)) cannot be specified.

Hints

-   This variant of the statement ASSIGN can be regarded as a different form of [READ TABLE ... ASSIGNING ...](javascript:call_link\('abapread_table_outdesc.htm'\)).
    
    -   More specifically, the value of sy-subrc and sy-tabix is set as in the statement READ TABLE and
    -   the addition [CASTING](javascript:call_link\('abapassign_casting.htm'\)) cannot be specified after an [inline declaration](javascript:call_link\('abenfield-symbol_inline.htm'\)) for the field symbol.
    
    Unlike READ TABLE, chainings can also be used to assign components of read lines or lines of nested internal tables.
    
-   The constructor operators VALUE and REF used to control the [result](javascript:call_link\('abentable_exp_result.htm'\)) of the table expression cannot be used here.
-   If the specified line is not found, an exception is not raised, unlike in other uses of table expressions.
-   If ELSE UNASSIGN is not specified, it is not sufficient to evaluate the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [<fs> IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)), but sy-subrc must be checked. If ELSE UNASSIGN is specified, the predicate expression as well as sy-subrc can be evaluated.

Example

This example works in the same way as the example for [READ TABLE ... ASSIGNING ...](javascript:call_link\('abapread_table_outdesc.htm'\)). Here, the READ statement is replaced by an ASSIGN statements and the required component is assigned directly.

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
    <price> \*= '0.9'.
  ENDIF.
ENDIF.