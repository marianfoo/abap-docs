  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%20DIRECTORY%2C%20ABAPIMPORT_DIRECTORY_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT DIRECTORY - Short Reference

[Reference](javascript:call_link\('abapimport_directory.htm'\))

Syntax

IMPORT DIRECTORY INTO itab
  FROM DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id.

Effect

Imports the table of contents of a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") into an internal table itab.

Additions   

-   FROM DATABASE dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster stored in a database table dbtab in the area ar with the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") cl.
-   ID id
    Specifies the ID id of the data cluster.
-   TO wa
    Specifies a work area wa for including details about the data cluster.