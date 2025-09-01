---
title: "SUM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsum_shortref.htm) Syntax SUM. Effect The statement SUM can only be specified within a loop LOOP(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm) and is only respected within a AT-ENDA
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsum.htm"
abapFile: "abapsum.htm"
keywords: ["loop", "do", "if", "try", "catch", "data", "types", "internal-table", "abapsum"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm) →  [AT, Group Level Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_itab.htm) → 

SUM

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsum_shortref.htm)

Syntax

SUM.

Effect

The statement SUM can only be specified within a loop [LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm) and is only respected within a [AT\-ENDAT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_itab.htm) control structure. Prerequisites for using the statement SUM are that the addition INTO is used in the LOOP statement, and that the specified work area wa is [compatible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatible_glosry.htm "Glossary Entry") with the line type of the internal table. Furthermore, SUM cannot be used when the line type of the internal table itab contains components that are tables themselves.

-   In a group level AT NEW compi and AT END OF compi, SUM calculates the sums of the [numeric](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") components to the right of the current group key for all lines of the current group level and assigns these to the corresponding components of the work area wa. In an elementary line type, there are no components to the right of the current group key and the work area wa remains unchanged.

-   In the group levels FIRST, LAST, and outside an AT\-ENDAT control structure, for a structured line type the sum of all numeric components of all lines of the internal table is calculated and assigned to the corresponding components of the work area wa. For an elementary numeric line type, SUM sums the line values and assigns the sum to wa. For non-numeric elementary line types, SUM has no effect and the work area wa keeps its current value.

Hint

When the AT control structure is exited, the content of the current table line is reassigned to the work area wa.

Example

Calculation of a sum with SUM at AT END OF. The lines of the respective current group level are evaluated.

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
  AT END OF col1.
    SUM.
    cl\_demo\_output=>write( wa ).
  ENDAT.
ENDLOOP.
cl\_demo\_output=>display( wa ).

Example

Calculation of a sum with SUM at AT LAST. All lines of the internal table are evaluated.

DATA:
  BEGIN OF wa,
    col TYPE i,
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

[Group Level Processing with Totals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenint_table_sum_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: Overflow when calculating totals
    Runtime error: ADDF\_INT\_OVERFLOW

-   Cause: Value too large when calculating totals in internal table, field too small
    Runtime error: SUM\_OVERFLOW
    

Uncatchable Exceptions

-   Cause: The statement SUM was used outside a LOOP processing of an internal table.
    Runtime error: SUM\_NO\_INTERNAL\_TABLE

-   Cause: The statement SUM was used within a LOOP processing belonging to another ABAP program.
    Runtime error: SUM\_ON\_FOREIGN\_INTERNAL\_TABLE

-   Cause: The statement SUM was used within a loop starting with LOOP ... ASSIGNING.
    Runtime error: SUM\_NO\_ASSIGNING