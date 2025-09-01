---
title: "MODIFY itab, result"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_shortref.htm) Syntax ...  ASSIGNING <fs> CASTING ELSE UNASSIGN   REFERENCE INTO dref . Effect These additions are possible only when modifying single lines(https://help.
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_result.htm"
abapFile: "abapmodify_itab_result.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "internal-table", "field-symbol", "abapmodify", "itab", "result"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) →  [MODIFY itab, itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_single.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20itab%2C%20result%2C%20ABAPMODIFY_ITAB_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY itab, result

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_shortref.htm)

Syntax

... *{* ASSIGNING <fs> *\[*CASTING*\]* *\[*ELSE UNASSIGN*\]**}*
  *|* *{* REFERENCE INTO dref *}*.

Effect

These additions are possible only when modifying [single lines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_single.htm). If modified successfully, the addition ASSIGNING is used to assign the line to a field symbol and the addition REFERENCE INTO is used to set a reference to the modified line in a reference variable.

The syntax and meaning are the same as when specifying the output behavior in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm) and the same restrictions apply regarding the modification of key fields for [primary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). In particular, inline declarations using the declaration operators [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm), [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm) and [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm) are possible. The addition ELSE UNASSIGN sets the state of the field symbol behind ASSIGNING to unassigned if the modification was not successful and sy-subrc is set to 4. Otherwise, the field symbol keeps its previous state.

Example

Conversion of smoking seats to non-smoking seats in an internal table of flight bookings. After the loop, each line in the reference table reftab references a line in itab in which a change took place.

DATA itab TYPE HASHED TABLE OF sbook
          WITH UNIQUE KEY carrid connid fldate bookid.
SELECT \*
       FROM sbook
       INTO TABLE @itab.
DATA reftab TYPE TABLE OF REF TO sbook WITH EMPTY KEY.
LOOP AT itab INTO DATA(line) WHERE smoker = 'X'.
  CLEAR line-smoker.
  MODIFY TABLE itab FROM line TRANSPORTING smoker
                    REFERENCE INTO FINAL(dref).
  APPEND dref TO reftab.
ENDLOOP.