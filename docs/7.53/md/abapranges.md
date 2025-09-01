  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) →  [Internal Tables with Header Line](javascript:call_link\('abenitab_header_line.htm'\)) → 

RANGES

[Quick Reference](javascript:call_link\('abapranges_shortref.htm'\))

Obsolete Syntax

RANGES rtab FOR dobj *\[*OCCURS n*\]*.

Effect

Obsolete declaration of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). This statement (not allowed in classes) is a short form of the following statement sequence which is also not allowed in classes:

[DATA: BEGIN OF rtab OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) *{*10*|*n*}*,
        sign   TYPE c LENGTH 1,
        option TYPE c LENGTH 2,
        low    LIKE dobj,
        high   LIKE dobj,
      END OF rtab.

Declares an internal table rtab with the structure of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") and a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). Without the addition [OCCURS](javascript:call_link\('abapdata_occurs.htm'\)), the initial memory requirement of the ranges table is set to ten rows. The addition OCCURS can be used to specify a numeric literal or a numeric constant n to determine a different initial memory requirement.

Notes

-   The statement RANGES is replaced by the addition TYPE*|*LIKE RANGE OF of the statements [TYPES](javascript:call_link\('abaptypes_ranges.htm'\)) and [DATA](javascript:call_link\('abapdata_ranges.htm'\)). If used, these declare ranges tables without header lines.
    
-   The sign and option columns of a ranges table declared using RANGES are not related to data types in ABAP Dictionary. For a ranges table defined in ABAP Dictionary, these columns are based on the data elements DDSIGN and DDOPTION.