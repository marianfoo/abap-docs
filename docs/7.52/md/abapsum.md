  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - Basic Form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) →  [AT - Group Level Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm) → 

SUM

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsum_shortref.htm)

Syntax

SUM.

Effect

The statement SUM can only be specified within a loop starting with [LOOP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm), and is only respected within a [AT\-ENDAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm) control structure. Prerequisites for using the statement SUM include using the addition INTO in the LOOP statement, and that the specified work area wa is [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") with the row type of the internal table. In addition, SUM cannot be used when the row type of the internal table itab contains components that are tables.

-   In a group level AT NEW compi and AT END OF compi, SUM calculates the sums of the [numeric](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") components to the right of the current group key for all rows of the current group level and assigns these to the corresponding components of the work area wa. In an elementary row type, there are no components to the right of the current group key and the work area wa remains unchanged.
    
-   In the group levels FIRST, LAST, and outside an AT\-ENDAT control structure, for a structured row type the sum of all numeric components of all rows of the internal table is calculated and assigned to the corresponding components of the work area wa. For an elementary numeric row type, SUM sums the row values and assigns the sum to wa. For non-numeric elementary row types, SUM has no effect and the work area wa keeps its current value.
    

Note

When the AT control structure is exited, the content of the current table row is reassigned to the work area wa.

Example

Calculates a sum with SUM at AT END OF. The rows of the respective current group level are evaluated.

DATA:
  BEGIN OF wa,
    col1 TYPE i,
    col2 TYPE i,
  END OF wa,
  itab LIKE TABLE OF wa WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 5
                FOR j = 1 UNTIL j > i
                ( col1 = i col2 = j ) ).
LOOP AT itab INTO wa.
  AT END OF comp2.
    SUM.
    cl\_demo\_output=>write( wa ).
  ENDAT.
ENDLOOP.
cl\_demo\_output=>display( wa ).

Example

Calculates a sum with SUM at AT LAST. All rows of the internal table are evaluated.

DATA:
  BEGIN OF wa,
    col      TYPE i,
  END OF wa,
  itab LIKE TABLE OF wa WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( col = i ) ).
LOOP AT itab INTO wa.
  AT LAST.
    SUM.
    cl\_demo\_output=>display( wa ).
  ENDAT.
ENDLOOP.

Executable Example

[Group Level Processing with Totals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenint_table_sum_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow when calculating totals
    Runtime error: ADDF\_INT\_OVERFLOW
    
-   Cause: Value too large when calculating totals in internal table, field too small
    Runtime error: SUM\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: The statement SUM was used outside a LOOP processing of an internal table.
    Runtime error: SUM\_NO\_INTERNAL\_TABLE
    
-   Cause: The statement SUM was used within a LOOP processing belonging to another ABAP program.
    Runtime error: SUM\_ON\_FOREIGN\_INTERNAL\_TABLE
    
-   Cause: The statement SUM was used within a loop starting with LOOP ... ASSIGNING.
    Runtime error: SUM\_NO\_ASSIGNING