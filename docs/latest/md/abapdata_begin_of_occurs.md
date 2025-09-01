  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_declare_obsolete.htm) →  [Internal Tables with a Header Line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_header_line.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20BEGIN%20OF%20OCCURS%2C%20ABAPDATA_BEGIN_OF_OCCURS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, BEGIN OF OCCURS

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_begin_of_shortref.htm)

Obsolete Syntax

DATA BEGIN OF itab OCCURS n.
  ...
DATA END OF itab *\[*VALID BETWEEN intlim1 AND intlim2*\]*.

Addition:

[... VALID BETWEEN intlim1 AND intlim2](#!ABAP_ONE_ADD@1@)

Effect

This variant of the statement string introduced by [DATA BEGIN OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_struc.htm), which is forbidden in classes, declares an internal table itab as a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a structured line type and a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"). The declarations between the statements DATA BEGIN OF and DATA END OF define the components of the [line type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrow_type_glosry.htm "Glossary Entry") of itab, just as in the regular variant of [DATA BEGIN OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_struc.htm). The data object n, which must be specified either directly as a numeric literal or as a numeric constant, determines the [initial memory requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry").

Hints

-   The statement string above is the original form of the declarations of internal tables. Internal tables declared in this way have always been tables in the real sense, meaning that the lines are mainly constructed from individual columns.
-   The following statement list replaces the above statements (except for the addition VALID BETWEEN), whereby the role of the header line is taken from the work area wa:
    
    DATA BEGIN OF wa.
           ...
    DATA END OF wa.
    DATA itab LIKE TABLE OF wa.
    
    The last statement is a short form of the complete [declaration](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_itab.htm) of itab, where the table type and key are supplemented with standard values.
    
-   The creation of the [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_header_line.htm) cannot be disabled in this variant. Since header lines in internal tables should never be used, however, this way of declaring internal tables should never occur again.

Addition   

... VALID BETWEEN intlim1 AND intlim2

Effect

The VALID BETWEEN addition of the DATA END OF statement is only important if the internal table is to be processed using the obsolete form of the statement [PROVIDE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprovide_obsolete.htm). intlim1 and intlim2 expect columns from the internal table of the data type d, i, n, or t. These columns are used implicitly as interval limits in the obsolete form of the statement PROVIDE.