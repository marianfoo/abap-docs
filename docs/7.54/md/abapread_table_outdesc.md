  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) → 

READ TABLE - result

[Quick Reference](javascript:call_link\('abapread_table_itab_shortref.htm'\))

Syntax

... *{* INTO wa *\[*[transport\_options](javascript:call_link\('abapread_table_transport_options.htm'\))*\]* *}*
  *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*
  *|* *{* TRANSPORTING NO FIELDS *}*.

Alternatives:

[1\. ... INTO wa *\[*transport\_options*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ASSIGNING <fs> *\[*CASTING*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... REFERENCE INTO dref](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... TRANSPORTING NO FIELDS](#!ABAP_ALTERNATIVE_4@4@)

Programming Guideline

[Output Behavior](javascript:call_link\('abentable_output_guidl.htm'\) "Guideline")

Effect

Defines the output behavior of a [READ statement](javascript:call_link\('abapread_table.htm'\)) for an internal table. There are four alternatives for the output behavior:

-   The addition INTO assigns the content of the found row to a work area. This addition can be used regardless of which way itab is specified.
    
-   The addition ASSIGNING assigns the found row to a field symbol <fs>. This addition is possibly only if an existing internal table is specified for itab.
    
-   The addition REFERENCE INTO creates a reference to the found row in a reference table. This addition is possibly only if an existing internal table is specified for itab.
    
-   The addition TRANSPORTING NO FIELDS specifies that only the relevant system fields are filled. This addition can be used regardless of which way itab is specified.
    

Note

Outside of classes, the addition INTO can also be specified together with TRANSPORTING NO FIELDS, but this produces a warning in the syntax check

Alternative 1

... INTO wa *\[*transport\_options*\]*

Effect

The content of the found row is assigned to the work area wa. The following can be specified for wa:

-   An existing work area that matches the row type of the internal table. The row type must be compatible with the data type of the work area or must be able to be converted to this type. If the work area is incompatible with the row type of the internal table, the content of the table row is converted to the data type of the work area in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a work area with the row type of the internal table is declared. The row type must be known statically and completely.
    

If no row is found, wa remains unchanged or initial. If a conversion error occurs in the assignment to wa, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

If the additions [transport\_options](javascript:call_link\('abapread_table_transport_options.htm'\)) are used, the work area wa must be compatible with the row type of the internal table.

Note

For READ TABLE, an (external) [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) exists where INTO wa can be omitted if the internal table has a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") itab with the same name. The statement is then implicitly enhanced by the addition of INTO itab. This short form is unrelated to the [obsolete key specification](javascript:call_link\('abapread_table_obsolet.htm'\)), which also evaluates the header line.

Example

Reads a particular row in the internal table sflight\_tab and assigns it to a work area sflight\_wa (declared inline). After the reference has been successfully assigned, the content of a component of the row is changed in the internal table.

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
  READ TABLE sflight\_tab
       WITH TABLE KEY carrid = carrid
                      connid = connid
                      fldate = fldate
       INTO DATA(sflight\_wa).
  IF sy-subrc = 0.
    sflight\_wa-price \*= '0.9'.
    MODIFY sflight\_tab FROM sflight\_wa INDEX sy-tabix.
  ENDIF.
ENDIF.

Alternative 2

... ASSIGNING <fs> *\[*CASTING*\]*

Effect

The found table row is assigned to a field symbol. After the statement READ TABLE, the field symbol points to the table row in the memory. The addition cannot be specified if itab is specified as the return value or result of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), since this value no longer exists once the statement has been executed.

The following can be specified for <fs>:

-   An existing field symbol whose typing matches the row type of the internal table. The optional addition CASTING can be used to perform a casting. It has the same meaning as if it were specified in the statement [ASSIGN](javascript:call_link\('abapassign_casting.htm'\)): The field symbol must be either fully typed, or typed with one of the generic built-in ABAP types c, n, p, or x. The assigned table row is [cast](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") to the type of the field symbol. The same exceptions can be raised here as with ASSIGN.
    
-   An inline declaration [FIELD-SYMBOL(<fs>)](javascript:call_link\('abenfield-symbol_inline.htm'\)), where a field symbol with the row type of the internal table is declared. If this cannot be known statically, the field symbol is declared with the generic type any and is assigned the constant [space](javascript:call_link\('abenspace.htm'\)) initially. The inline declaration cannot be specified after the addition CASTING.
    

If no table row is found, <fs> remains unchanged or initial.

As long as the field symbol points to the row, assignments to the field symbol modify the row in the internal table. The following restrictions apply with respect to modifications to key fields of the [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"):

-   The key fields of the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") are read-only and must not be modified. This would invalidate internal table administration. The processing statements for internal tables check whether writes are performed on individual key fields and a corresponding non-handleable exception raised. If writes are performed in write positions across the entire table row (for example, as a target field of assignments or as actual parameters for output parameters), an exception is always raised.
    
-   The key fields of a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), however, are only read-only while the secondary table is being used. This is the case in [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) loops and during the use of the [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) statement, in which the secondary key is specified after USING KEY. Otherwise the key fields are not read-only.
    

The administration of unique secondary keys is updated after modifications are made to individual rows using field symbols the next time the internal table is accessed ([delayed update](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry")). The administration of non-unique secondary keys is updated after the next explicit use of the secondary key ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). The check on the uniqueness of a secondary key does not take place until the time of the update. An internal table might therefore be in an inconsistent state with respect to the secondary key after individual rows are modified using field symbols. An exception is not raised until the table is next used. If the next use is not directly after the modification, the secondary key can be explicitly updated using methods of the CL\_ABAP\_ITAB\_UTILITIES class to handle possible exceptions on the spot.

Notes

-   The [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of the field symbol must be compatible with the row type of the internal table.
    
-   If the READ statement is successful (sy-subrc has value 0), it is guaranteed that the field symbol immediately after execution of the statement indicates a memory area. A query using [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) is not necessary there.
    
-   It is safer to evaluate the return code sy-subrc than to use [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)), since a memory area can be assigned to field symbol. This applies to inline declarations too.
    
-   If the row to which the field symbol points is deleted, no more memory space is allocated to the field symbol and it can no longer be used instead of a data object. If the field symbol is not used directly after the READ statement, it may be useful to carry out a check using [IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)).
    
-   Another form of the statement READ TABLE using the addition ASSIGNING is a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [table\_exp](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) specified after the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).
    

Example

Selects a particular row in the internal table sflight\_tab and assigns it to a field symbol <sflight> (declared inline). After the reference has been successfully assigned, the content of a component of the row is changed in the internal table. See also the example of the assignment of a [table expression](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) to a field symbol.

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
  READ TABLE sflight\_tab
       WITH TABLE KEY carrid = carrid
                      connid = connid
                      fldate = fldate
       ASSIGNING FIELD-SYMBOL(<sflight>).
  IF sy-subrc = 0.
     <sflight>-price \*= '0.9'.
  ENDIF.
ENDIF.

Alternative 3

... REFERENCE INTO dref

Effect

A reference to the found table row is made in the data reference variable dref. The addition cannot be specified if itab is specified as the return value or result of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") or of a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") of a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), since this value no longer exists once the statement has been executed.

The following can be specified for dref:

-   An existing data reference variable whose static type is compatible with the row type of the internal table or is the generic type data.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a data reference variable is declared whose static type is the row type of the internal table. The row type must be known statically and completely.
    

If no table row is found, dref remains unchanged or initial.

By dereferencing the data reference, the content of the found table row can be evaluated and changed. The same limitations apply to the modification of key fields of the [primary](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") as for access using field symbols (see ASSIGNING addition).

Notes

-   If the READ statement is successful (sy-subrc has value 0), it is guaranteed that the data reference variable immediately after the execution of the statement indicates a row. A query using [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) is not necessary here.
    
-   Alongside [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\)) and the reference operator [REF](javascript:call_link\('abenconstructor_expression_ref.htm'\)), REFERENCE INTO is the only way of creating [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry"). Stack references can become invalid if the referenced data object is deleted.
    
-   When applied to internal tables in the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry") REFERENCE INTO creates memory-retaining [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry").
    
-   All references ([heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") and [stack references](javascript:call_link\('abenstack_reference_glosry.htm'\) "Glossary Entry")) that point to rows from internal tables can become invalid when rows are deleted. If a data reference variable is not used directly after the READ statement, it may be useful to carry out a check using [IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)).
    

Example

Selects a particular row of the internal table sflight\_tab and assigns a reference to the found row to the data reference variable sflight\_ref (declared inline). After the reference has been successfully assigned, the content of a component of the row is changed in the internal table.

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
  READ TABLE sflight\_tab
       WITH TABLE KEY carrid = carrid
                      connid = connid
                      fldate = fldate
            REFERENCE INTO DATA(sflight\_ref).
  IF sy-subrc = 0.
    sflight\_ref->price \*= '0.9'.
  ENDIF.
ENDIF.

Alternative 4

... TRANSPORTING NO FIELDS

Effect

If the addition TRANSPORTING NO FIELDS is used, the statement READ TABLE only checks whether the row that is being searched for exists, and fills the system fields sy-subrc and sy-tabix. The system cannot access the content of the found row.

Notes

-   The [predicate function](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)) can also be used to check the existence of a table row.
    
-   The table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)) can also be used to identify the row number in the table index.
    

Example

Checks whether a particular row exists in the internal table sflight\_carr and assigns the row number in the primary table index of the found row in sy-tabix to idx.

DATA carrid TYPE scarr-carrid.
...
DATA: scarr\_tab TYPE SORTED TABLE OF scarr
                WITH UNIQUE KEY carrid,
      idx  TYPE i.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
READ TABLE scarr\_tab
     WITH TABLE KEY carrid = carrid
     TRANSPORTING NO FIELDS.
IF sy-subrc = 0.
  idx = sy-tabix.
ENDIF.

Continue
[READ TABLE - transport\_options](javascript:call_link\('abapread_table_transport_options.htm'\))
![Example](exa.gif "Example") [Internal Tables, Output Area](javascript:call_link\('abenread_table_abexa.htm'\))