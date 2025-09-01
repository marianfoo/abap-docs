  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) →  [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\)) → 

DATA - BEGIN OF OCCURS

[Quick Reference](javascript:call_link\('abapdata_begin_of_shortref.htm'\))

Obsolete Syntax

DATA BEGIN OF itab OCCURS n.
  ...
DATA END OF itab *\[*VALID BETWEEN intlim1 AND intlim2*\]*.

Addition:

[... VALID BETWEEN intlim1 AND intlim2](#!ABAP_ONE_ADD@1@)

Effect

This variant of the statement list introduced using [DATA BEGIN OF](javascript:call_link\('abapdata_struc.htm'\)) (which is forbidden in classes) declares an internal table itab as a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a structured row type and a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). The declarations between the statements DATA BEGIN OF and DATA END OF define the components of the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") of itab, just as in the regular variant of [DATA BEGIN OF](javascript:call_link\('abapdata_struc.htm'\)). The data object n, which has to be specified either directly as a numeric literal or as a numeric constant, determines the initial memory requirement.

Notes

-   The statement list above is the original form of the declarations of internal tables. Internal tables declared in this way have always been tables in the real sense, meaning that the rows are mainly constructed from individual columns.
    
-   The following statement list replaces the above statements (with the exception of the addition VALID BETWEEN); here the role of the header line is taken by the work area wa:
    

DATA BEGIN OF wa.
       ...
DATA END OF wa.
DATA itab LIKE TABLE OF wa.

The last statement is an abbreviated form of the complete [declaration](javascript:call_link\('abapdata_itab.htm'\)) of itab, where the table type and key are supplemented with standard values.

-   The creation of the [header line](javascript:call_link\('abenitab_header_line.htm'\)) cannot be disabled in this variant. Since header lines in internal tables should never be used, however, this way of declaring internal tables should never be encountered again.
    

Addition

... VALID BETWEEN intlim1 AND intlim2

Effect

The VALID BETWEEN addition of the DATA END OF statement is only important if the internal table is to be processed using the obsolete form of the statement [PROVIDE](javascript:call_link\('abapprovide_obsolete.htm'\)). intlim1 and intlim2 expect columns from the internal table of the data type d, i, n, or t. These columns are used implicitly as interval limits in their obsolete form of the statement PROVIDE.