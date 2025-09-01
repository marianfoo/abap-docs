  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab_declare_obsolete.htm'\)) →  [Internal Tables with a Header Line](javascript:call_link\('abenitab_header_line.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RANGES%2C%20ABAPRANGES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RANGES

[Short Reference](javascript:call_link\('abapranges_shortref.htm'\))

Obsolete Syntax

RANGES range\_tab FOR dobj *\[*OCCURS n*\]*.

Effect

Obsolete declaration of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). This statement, which is forbidden in classes, is a short form of the following statement string which is also not allowed in classes:

[DATA: BEGIN OF range\_tab OCCURS](javascript:call_link\('abapdata_begin_of_occurs.htm'\)) *{*10*|*n*}*,
        sign   TYPE c LENGTH 1,
        option TYPE c LENGTH 2,
        low    LIKE dobj,
        high   LIKE dobj,
      END OF range\_tab.

Declares an internal table range\_tab with the structure of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") and a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). Without the addition [OCCURS](javascript:call_link\('abapdata_occurs.htm'\)), the [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry") of the ranges table is set to ten lines. The addition OCCURS can be used to specify either a numeric literal or a numeric constant n to determine a different initial memory requirement.

Hints

-   The statement RANGES is replaced by the addition TYPE*|*LIKE RANGE OF of the statements [TYPES](javascript:call_link\('abaptypes_ranges.htm'\)) and [DATA](javascript:call_link\('abapdata_ranges.htm'\)). If used, these declare ranges tables without header lines.
-   The sign and option columns of a ranges table declared using RANGES are not related to data types in the ABAP Dictionary. For a ranges table defined in the ABAP Dictionary, these columns refer to the data elements DDSIGN and DDOPTION.