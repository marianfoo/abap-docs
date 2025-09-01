  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - Basic Form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) → 

LOOP AT itab - result

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_shortref.htm)

Syntax

... *{* INTO wa *}*
  *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
  *|* *{* REFERENCE INTO dref *}*
  *|* *{* TRANSPORTING NO FIELDS *}* ...

Effect

Defines the output behavior of a [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) across an internal table. There are four alternatives for the output behavior:

-   The addition INTO is used to assign the content of the current row to a work area wa.
    
-   The addition ASSIGNING is used to assign the current row to a field symbol <fs>. No other memory area can be assigned to the field symbol within the loop and the assignment cannot be undone using [UNASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunassign.htm).
    
-   The addition REFERENCE INTO is used to create a reference to the current row in a reference table. No other reference can be assigned to the reference variable within the loop and the reference variable cannot be initialized using [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm).
    
-   The addition TRANSPORTING NO FIELDS specifies that only the relevant system fields are filled. This addition is only possible if the addition WHERE is used in the conditions [cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm) at the same time and if the addition [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm) is not used.
    

If the internal table itab is specified as an existing data object, the syntax and meaning of the specified [output behavior](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_outdesc.htm) is the same as in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) (with the exception that no further [transport\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_transport_options.htm) can be specified after INTO wa) and the same restrictions apply to modifications to key fields of the [primary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). In particular, inline declarations for the work area, the field symbol, or the reference variable using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield-symbol_inline.htm) are possible.

If a field symbol or a dereferenced reference variable is specified for the work area wa or the reference variable dref, the target data object of the field symbol or reference variable is determined in each loop pass. The current data object is used as the target area for each loop pass. This means that changes in the assignment of the field symbol or reference variable within the loop modifies the target area.

If the internal table is specified as the return value of a [functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), a [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry"), the additions ASSIGNING and REFERENCE INTO can also be specified for LOOP (this is not the case with READ TABLE). The internal table is only available while the loop is being processed, which means that all field symbols and reference variables that point to rows in the internal table become invalid when the loop is exited.

Programming Guideline

[Output Behavior](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_output_guidl.htm "Guideline")

Notes

-   If the current row is deleted within the loop when the additions ASSIGNING or REFERENCE are used, the field symbol or reference variable are then unassigned or unbound in the current loop pass.
    
-   For LOOP, an [obsolete short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_short_forms.htm) exists (outside of classes) where INTO wa can be omitted if the internal table has a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry") itab with the same name. INTO itab is then added to the statement.
    

Example

Two LOOP loops are used to determine the row numbers for numbers greater than or equal to 40 and less than or equal to 60 in a sorted table of random numbers, and the addition TRANSPORTING NO FIELDS is used. Then, INTO is used to read these rows to a variable number. Filling the output table in this way demonstrates the use of number. It could also be done using [INSERT LINES OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_linespec.htm).

DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 100 ).
DATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ).
LOOP AT itab TRANSPORTING NO FIELDS WHERE table\_line >= 40.
  DATA(idx1) = sy-tabix.
  EXIT.
ENDLOOP.
LOOP AT itab FROM idx1 TRANSPORTING NO FIELDS WHERE table\_line > 60.
  DATA(idx2) = sy-tabix - 1.
  EXIT.
ENDLOOP.
DATA output TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT itab FROM idx1 TO idx2 INTO DATA(number).
  output = VALUE #( BASE output ( number ) ).
ENDLOOP.
cl\_demo\_output=>display( output ).

Example

Loop across an internal table containing dates. The table rows are assigned to a structured field symbol with a corresponding casting.

TYPES:
  BEGIN OF date,
    year  TYPE c LENGTH 4,
    month TYPE c LENGTH 2,
    day   TYPE c LENGTH 2,
  END OF date.
DATA itab TYPE SORTED TABLE OF d WITH UNIQUE KEY table\_line.
itab = VALUE #( FOR i = - 3 UNTIL i > 3 ( sy-datlo + i ) ).
DATA output TYPE TABLE OF date WITH EMPTY KEY.
FIELD-SYMBOLS <date> TYPE date.
LOOP AT itab ASSIGNING <date> CASTING.
  output = VALUE #( BASE output ( <date> ) ).
ENDLOOP.
cl\_demo\_output=>display( output ).