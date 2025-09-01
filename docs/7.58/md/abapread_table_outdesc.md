---
title: "READ TABLE, result"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_itab_shortref.htm) Syntax ...  INTO wa transport_options(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm)    ASSIGNING <fs> CASTING
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_outdesc.htm"
abapFile: "abapread_table_outdesc.htm"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "abapread", "table", "outdesc"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20TABLE%2C%20result%2C%20ABAPREAD_TABLE_OUTDESC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ TABLE, result

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_itab_shortref.htm)

Syntax

... *{* INTO wa *\[*[transport\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm)*\]* *}*
  *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *\[*ELSE UNASSIGN*\]* *}*
  *|* *{* REFERENCE INTO dref *}*
  *|* *{* TRANSPORTING NO FIELDS *}*.

Alternatives:

[1\. ... INTO wa *\[*transport\_options*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ASSIGNING <fs> *\[*CASTING*\]* *\[*ELSE UNASSIGN*\]*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... REFERENCE INTO dref](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... TRANSPORTING NO FIELDS](#!ABAP_ALTERNATIVE_4@4@)

Programming Guideline

[Output Behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_output_guidl.htm "Guideline")

Effect

Defines the output behavior of a [READ statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table.htm) for an internal table. There are four alternatives for the output behavior:

-   The addition INTO assigns the content of the found line to a work area. This addition can be used regardless of how itab is specified.
-   The addition ASSIGNING assigns the found line to a field symbol <fs>. This addition is possibly only if an existing internal table is specified for itab.
-   The addition REFERENCE INTO creates a reference to the found line in a reference table. This addition is possibly only if an existing internal table is specified for itab.
-   The addition TRANSPORTING NO FIELDS specifies that only the relevant system fields are filled. This addition can be used regardless of how itab is specified.

Hint

Outside of classes, the addition INTO can also be specified together with TRANSPORTING NO FIELDS, but this produces a warning in the syntax check

Alternative 1   

... INTO wa *\[*transport\_options*\]*

Effect

The content of the found line is assigned to the work area wa. The following can be specified for wa:

-   An existing work area that matches the line type of the internal table. The line type must be compatible with or convertible to the data type of the work area. If the work area is incompatible with the line type of the internal table, the content of the table line is converted to the data type of the work area in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm).
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm), where a work area with the line type of the internal table is declared. The line type must be known statically and completely.

If no line is found, wa remains unchanged or initial. If a conversion error occurs in the assignment to wa, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

If the additions [transport\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm) are used, the work area wa must be compatible with the line type of the internal table.

Hint

For READ TABLE, an [obsolete short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_short_forms.htm) exists where INTO wa can be omitted if the internal table has an identically named [header line](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry") itab. INTO itab is then implicitly added to the statement. This short form is independent of the [obsolete key specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_obsolet.htm), which also evaluates the header line.

Example

Reading of a particular line in the internal table sflight\_tab and assignment to a work area sflight\_wa declared inline. After a successful assignment, the content of a component of the line is changed in the internal table.

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

... ASSIGNING <fs> *\[*CASTING*\]* *\[*ELSE UNASSIGN*\]*

Additions:

[1\. ... CASTING](#!ABAP_ADDITION_1@1@)
[2\. ... ELSE UNASSIGN](#!ABAP_ADDITION_2@2@)

Effect

The found table line is assigned to a field symbol. After the statement READ TABLE, the field symbol points to the table line in the memory. The addition cannot be specified if itab is specified as the return value or result of a [functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or a [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry"), since this value no longer exists once the statement has been executed.

The following can be specified for <fs>:

-   An existing field symbol whose typing matches the line type of the internal table. The optional addition CASTING can be used to perform a casting.
-   An inline declaration [FIELD-SYMBOL(<fs>)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm), where a field symbol with the line type of the internal table is declared. If this cannot be known statically, the field symbol is declared with the generic type any and is assigned the constant [space](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspace.htm) initially. The addition CASTING is not possible after an inline declaration.

If no table line is found, the state of <fs> depends on the addition ELSE UNASSIGN.

As long as the field symbol points to the line, assignments to the field symbol modify the line in the internal table. The following restrictions apply with respect to modifications to key fields of the [primary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"):

-   The key fields of the [primary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of [sorted tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_table_glosry.htm "Glossary Entry") and [hashed tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry") are read-only and must not be modified, since this would invalidate internal table administration. The processing statements for internal tables check whether writes are performed on individual key fields and a corresponding attempt raises an uncatchable exception. If writes are performed in write positions across the entire table line, for example, as a target field of assignments or as actual parameters for output parameters, an exception is always raised.
-   The key fields of a [secondary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), however, are only read-only, while the secondary table is used. This is the case for [LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm) and when using the [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_itab.htm) statement where the secondary key is specified after USING KEY. Otherwise the key fields are not read-only.

The administration of unique secondary keys is updated after modifications are made to individual lines using field symbols the next time the internal table is accessed ([delayed update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendelayed_update_glosry.htm "Glossary Entry")). The administration of non-unique secondary keys is updated after the next explicit use of the secondary key ([lazy update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlazy_update_glosry.htm "Glossary Entry")). The check on the uniqueness of a secondary key does not take place until the time of the update. An internal table might therefore be in an inconsistent state with respect to the secondary key after individual lines have been modified using field symbols, which does not raise an exception until the table is next used. If the next use is not directly after the modification, the secondary key can be explicitly updated using methods of the class CL\_ABAP\_ITAB\_UTILITIES to handle any exceptions on the spot.

Hints

-   The [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol must match the line type of the internal table.
-   If the READ statement is successful (sy-subrc has value 0), it is guaranteed that the field symbol immediately points to a memory area after the execution of the statement. A query using [IS ASSIGNED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_assigned.htm) is not necessary there.
-   If the addition ELSE UNASSIGN is not used, it is recommended that the return code sy-subrc is evaluated and that [IS ASSIGNED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_assigned.htm) is not used, since in case of an unsuccessful read, the field symbol keeps its previous state and a memory area can be assigned to field symbol. This applies in particular to inline declarations. If the addition ELSE UNASSIGN is used, sy-subrc as well as the predicate IS ASSIGNED can be used.
-   If the line to which the field symbol points is deleted, no more memory area is assigned to the field symbol and it can no longer be used instead of a data object. If the field symbol is not used directly after the READ statement, it may be useful to carry out a check using [IS ASSIGNED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_assigned.htm).
-   Another form of the statement READ TABLE using the addition ASSIGNING is the specification of a [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm) after the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm).

Addition 1   

... CASTING

Effect

The addition CASTING has the same meaning as if it were specified without further additions in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm): The field symbol must be either completely typed, or typed with one of the generic built-in ABAP types c, n, p, or x. The assigned table line is [cast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") to the type of the field symbol. The same exceptions can be raised here as with ASSIGN.

The addition CASTING cannot be used if the field symbol is declared inline with FIELD-SYMBOL.

Addition 2   

... ELSE UNASSIGN

Effect

The addition ELSE UNASSIGN sets the state of the field symbol to unassigned if no table line is found and sy-subrc is set to 4 or 8. If ELSE UNASSIGN is not specified, the field symbol keeps its previous state.

Hint

See also the addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_else_unassign.htm) of the statement ASSIGN.

Example

Reading of a particular line in the internal table sflight\_tab and assignment to a field symbol <sflight> declared inline. After a successful assignment, the content of a component of the line is changed in the internal table. See also the example of the assignment of a [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm) to a field symbol.

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
       ASSIGNING FIELD-SYMBOL(<sflight>) ELSE UNASSIGN.
  IF <sflight> IS ASSIGNED.
    <sflight>-price \*= '0.9'.
  ENDIF.
ENDIF.

Alternative 3   

... REFERENCE INTO dref

Effect

A reference to the found table line is made in the data reference variable dref. The addition cannot be specified if itab is specified as the return value or result of a [functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") or of a [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") of a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), since this value no longer exists once the statement has been executed.

The following can be specified for dref:

-   An existing data reference variable whose static type is compatible with the line type of the internal table or is the generic type data.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfinal_inline.htm), where a data reference variable is declared whose static type is the line type of the internal table. The line type must be known statically and completely.

If no table line is found, dref remains unchanged or initial.

By dereferencing the data reference, the content of the found table line can be evaluated and changed. The same restrictions apply to the modification of key fields of the [primary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") as to access using field symbols (see ASSIGNING addition).

Hints

-   If the READ statement is successful (sy-subrc has value 0), it is guaranteed that the data reference variable immediately points to a line after the execution of the statement. A query using [IS BOUND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_bound.htm) is not necessary here.
-   Alongside the statement [GET REFERENCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_reference.htm) and the reference operator [REF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_ref.htm), REFERENCE INTO is the only way of creating [stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry"). Stack references can become invalid if the referenced data object is deleted.
-   When applied to internal tables in the [heap](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_glosry.htm "Glossary Entry") REFERENCE INTO creates memory-retaining [heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry").
-   All references ([heap references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheap_reference_glosry.htm "Glossary Entry") and [stack references](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstack_reference_glosry.htm "Glossary Entry")) that point to lines from internal tables can become invalid when lines are deleted. If a data reference variable is not used directly after the READ statement, it may be useful to carry out a check using [IS BOUND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogexp_bound.htm).

Example

Reading of a particular line of the internal table sflight\_tab and assignment of a reference to the found line to the data reference variable sflight\_ref (declared inline). After a successful assignment, the content of a component of the line is changed in the internal table.

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
            REFERENCE INTO FINAL(sflight\_ref).
  IF sy-subrc = 0.
    sflight\_ref->price \*= '0.9'.
  ENDIF.
ENDIF.

Alternative 4   

... TRANSPORTING NO FIELDS

Effect

If the addition TRANSPORTING NO FIELDS is used, the statement READ TABLE only checks whether the line that is being searched for exists and fills the system fields sy-subrc and sy-tabix. The system cannot access the content of the found line.

Hints

-   The [predicate function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpredicate_function_glosry.htm "Glossary Entry") [line\_exists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_exists_function.htm) can also be used to check the existence of a table line.
-   The table function [line\_index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_index_function.htm) can also be used to identify the line number in the table index.

Example

Check whether a particular line exists in the internal table sflight\_carr and assignment of the line number in the primary table index of the found line in sy-tabix to idx.

DATA carrid TYPE scarr-carrid.
...
DATA: scarr\_tab TYPE SORTED TABLE OF scarr
                WITH UNIQUE KEY carrid,
      idx TYPE i.
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
[READ TABLE, transport\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_table_transport_options.htm)
![Example](exa.gif "Example") [itab - Output Area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenread_table_abexa.htm)