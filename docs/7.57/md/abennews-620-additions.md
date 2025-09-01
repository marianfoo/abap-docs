  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.20](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-620.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Additions in Release 6.20, ABENNEWS-620-ADDITIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Additions in Release 6.20

[1\. DAYLIGHT SAVING TIME in CONVERT TIME STAMP](#!ABAP_MODIFICATION_1@1@)
[2\. AS PERSON TABLE in Infotypes](#!ABAP_MODIFICATION_2@2@)
[3\. TO*|*FROM INTERNAL TABLE in EXPORT*|*IMPORT](#!ABAP_MODIFICATION_3@3@)
[4\. CONNECTION in ABAP SQL](#!ABAP_MODIFICATION_4@4@)
[5\. SOURCE in CALL TRANSFORMATION](#!ABAP_MODIFICATION_5@5@)
[6\. VISIBLE LENGTH in SELECTION-SCREEN PUSHBUTTON](#!ABAP_MODIFICATION_6@6@)
[7\. DISPLAY*|*MEMORY OFFSET in GET*|*SET CURSOR*|*LINE](#!ABAP_MODIFICATION_7@7@)

Modification 1   

DAYLIGHT SAVING TIME in CONVERT TIME STAMP

The addition [DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_time-stamp.htm) has been added to the statement CONVERT TIME STAMP tst. This provides a flag in data object dst that indicates whether the time tst is within the daylight saving time.

Modification 2   

AS PERSON TABLE in Infotypes

This addition creates an internal table of personal data when [infotype nnnn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinfotypes.htm) is declared. The internal table is given the name PPnnnn, unless a name was specified explicitly using the addition NAME.

Modification 3   

TO*|*FROM INTERNAL TABLE in EXPORT*|*IMPORT

The variant [EXPORT ... TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) makes it possible to store cluster data in the internal table itab. The variant [IMPORT ... FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) can be used to read this repository again.

Modification 4   

CONNECTION in ABAP SQL

The addition CONNECTION enables all [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) statements to use databases other than the standard database. The alternative database systems must be supported by SAP.

Modification 5   

SOURCE in CALL TRANSFORMATION

The addition [SOURCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) enables ABAP data and objects to be serialized in a canonical [XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxml_glosry.htm "Glossary Entry") format, where the [SAP XSLT processor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxslt_processor_glosry.htm "Glossary Entry") has a direct interface to the serializer. The result of this [XSLT transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsl_transformation_glosry.htm "Glossary Entry") can be produced as XML data or be converted back into ABAP data and objects.

Modification 6   

VISIBLE LENGTH in SELECTION-SCREEN PUSHBUTTON

This addition can be used to change the visible length of pushbuttons for the statement [SELECTION-SCREEN PUSHBUTTON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_layout.htm).

Modification 7   

DISPLAY*|*MEMORY OFFSET in GET*|*SET CURSOR*|*LINE

When OFFSET is specified with the additions DISPLAY or MEMORY in list processing, the statements [GET CURSOR *{* FIELD f *|* LINE l *}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_list.htm) and [SET CURSOR *{* FIELD f *|* LINE l*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_cursor_list.htm) can be used to specify whether the column in the displayed list or the position in the list buffer is intended. The addition DISPLAY is the standard and can be omitted.