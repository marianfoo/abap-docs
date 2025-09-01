  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharacter_string_obsolete.htm) → 

CONVERT - DATE, INVERTED-DATE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_date_shortref.htm)

Obsolete Syntax

CONVERT *{* *{*DATE dat1 INTO INVERTED-DATE dat2*}*
        *|* *{*INVERTED-DATE dat1 INTO DATE dat2*}* *}*.

Effect

These variants of the statement CONVERT are not permitted in classes. They convert the digits in a character-like data object in dat1 into their complement on nine (the difference to the number nine) and assign the result to the data object dat2. The data objects dat1 and dat2 must have a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like data type with length 8. The same data object can be specified for dat2 as for dat1.

Notes

-   These forms of the CONVERT statement are not allowed in classes. They were previously used for sorting by date fields in internal tables and [extracts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextract_glosry.htm "Glossary Entry") for changing the sort direction. These have now been replaced by the ASCENDING and DESCENDING additions of the [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) statement. If necessary, the complement on nine can be formed using the following [TRANSLATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptranslate.htm) statement:
    

dat2 = dat1.
TRANSLATE dat2 USING '09182736455463728190'.

-   Do not mistake the variant of the statement CONVERT DATE shown here with the statement [CONVERT DATE ... INTO TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_date_time-stamp.htm) used for creating time stamps.
    

Example

The following program section sorts the internal table sflight\_tab in descending order by the fldate column.

DATA sflight\_tab TYPE TABLE OF sflight.
FIELD-SYMBOLS <sflight\_wa> TYPE sflight.
SELECT \* FROM sflight INTO TABLE @sflight\_tab.
LOOP AT sflight\_tab ASSIGNING <sflight\_wa>.
  CONVERT DATE <sflight\_wa>-fldate
    INTO INVERTED-DATE <sflight\_wa>-fldate.
ENDLOOP.
SORT sflight\_tab BY fldate.
LOOP AT sflight\_tab ASSIGNING <sflight\_wa>.
  CONVERT INVERTED-DATE <sflight\_wa>-fldate
     INTO DATE <sflight\_wa>-fldate.
ENDLOOP.

The last nine lines can be replaced by a single line:

SORT sflight\_tab BY fldate DESCENDING.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Conversion not possible due to invalid field length
    Runtime error: CONVERT\_ILLEGAL\_CONVERSION