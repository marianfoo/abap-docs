  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SORT%2C%20ABAPSORT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SORT - Short Reference

[Reference](javascript:call_link\('abapsort_extract.htm'\))

Syntax

SORT *\[*ASCENDING*|*DESCENDING*\]*
     *\[*AS TEXT*\]*
     *\[*STABLE*\]*
     *\[*BY *{*field1 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         *{*field2 *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
         ...*\]*.

Effect

Obsolete: Sorts the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") after the [field group](javascript:call_link\('abenfield_group_glosry.htm'\) "Glossary Entry") header.

Additions   

-   [ASCENDING](javascript:call_link\('abapsort_extract.htm'\))
    Sorts in ascending order.
-   [DESCENDING](javascript:call_link\('abapsort_extract.htm'\))
    Sorts in descending order.
-   [AS TEXT](javascript:call_link\('abapsort_extract.htm'\))
    Sorts text-like components in accordance with the [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry").
-   [STABLE](javascript:call_link\('abapsort_extract.htm'\))
    Ensures stable sorting by retaining the relative order of non-affected lines.
-   [BY field1 ... field2 ...](javascript:call_link\('abapsort_key.htm'\))
    Sorts by specified fields field1, field2, ... instead of by field group header.