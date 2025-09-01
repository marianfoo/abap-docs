  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

READ TABLE itab - Short Reference

[Reference](javascript:call_link\('abapread_table.htm'\))

Syntax

READ TABLE itab
           *{* *{**{*FROM wa *\[*USING KEY key\_name*|*(name)*\]**}*
             *|**{*WITH TABLE KEY *\[*key\_name*|*(name) COMPONENTS*\]*
                              *{*comp\_name1*|*(name1)*}* = dobj1
                              *{*comp\_name2*|*(name2)*}* = dobj2
                              ...*}*
             *|* *{*WITH KEY comp1 = dobj1 comp2 = dobj2 ... *\[*BINARY SEARCH*\]**}*
             *|* *{*WITH KEY key\_name*|*(name)
                         COMPONENTS comp1 = dobj1 comp2 = dobj2 ... *}*
             *|* *{*INDEX idx *\[*USING KEY key\_name*|*(name)*\]**}* *}*
             *|* *{*WITH KEY dobj *\[*BINARY SEARCH*\]**}*
             *|* *{*WITH KEY = dobj *\[*BINARY SEARCH*\]**}* *}*
           *{* *{*INTO wa
              *\[*COMPARING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}**|**{*NO FIELDS*}* *}**\]*
              *\[*TRANSPORTING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}* *}**\]**}*
           *|* *{* ASSIGNING <fs> *\[*CASTING*\]* *}*
           *|* *{* REFERENCE INTO dref *}*
           *|* *{*TRANSPORTING NO FIELDS*}* *}*.

Effect

Reads a single line from an internal table itab.

Additions

-   [FROM wa](javascript:call_link\('abapread_table_key.htm'\))
    Specifies the line to be read by matching it with the key values of a work area wa.
-   [WITH TABLE KEY
    *{*comp\_name1*|*(name1)*}* = dobj1 *{*comp\_name2*|*(name2)*}* = dobj2 ...](javascript:call_link\('abapread_table_key.htm'\))
    Specifies the line to be read by specifying components of the primary table key statically or dynamically.
-   [WITH KEY comp1 = dobj1 comp2 = dobj2 ... *\[*BINARY SEARCH*\]*](javascript:call_link\('abapread_table_free.htm'\))
    Specifies the line to be read by specifying components comp1, comp2, .... Appropriately sorted standard tables are searched using a binary search BINARY SEARCH.
-   [WITH KEY *\[*key\_name*|*(name) COMPONENTS*\]* comp1 = dobj1 comp2 = dobj2 ...](javascript:call_link\('abapread_table_free.htm'\))
    Specifies the line to be read by specifying components comp1, comp2, ... for a table key.
-   [INDEX idx](javascript:call_link\('abapread_table_index.htm'\))
    Specifies the line to be read by specifying the line number idx of a table index.
-   [KEY key\_name*|*(name)](javascript:call_link\('abapread_table.htm'\))
    Specifies (statically or dynamically) a (secondary) table key used to find the line to be read.
-   [WITH KEY dobj *\[*BINARY SEARCH*\]*](javascript:call_link\('abapread_table_obsolet.htm'\))
    Obsolete: Reads the first line for which the left-aligned content matches the content of the data object dobj. The table line is [cast](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") to the type of dobj. Tables sorted accordingly are searched using the addition BINARY SEARCH.
-   [WITH KEY = dobj *\[*BINARY SEARCH*\]*](javascript:call_link\('abapread_table_obsolet.htm'\))
    Obsolete: Reads the first line whose entire content matches the content of the data object dobj. Appropriately sorted tables are sorted using a BINARY SEARCH.
-   [INTO wa](javascript:call_link\('abapread_table_outdesc.htm'\))
    Assigns the read line to a work area wa.
-   [COMPARING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}**|**{*NO FIELDS*}* *}*](javascript:call_link\('abapread_table_transport_options.htm'\))
    Compares the components comp1, comp2, ... , all components, or no components of a found line with the corresponding components of the work area and sets sy-subrc accordingly.
-   [TRANSPORTING *{* *{*comp1 comp2 ...*}**|**{*ALL FIELDS*}* *}*](javascript:call_link\('abapread_table_transport_options.htm'\))
    Assigns the specified components comp1, comp2, ... or all components of the found line to the work area wa.
-   [ASSIGNING <fs> *\[*CASTING*\]*](javascript:call_link\('abapread_table_outdesc.htm'\))
    Assigns the line read to a field symbol <fs>; [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") is an option.
-   [REFERENCE INTO dref](javascript:call_link\('abapread_table_outdesc.htm'\))
    Assigns the reference to the read line to a reference variable dref.
-   [TRANSPORTING NO FIELDS](javascript:call_link\('abapread_table_outdesc.htm'\))
    Does not assign the read line.