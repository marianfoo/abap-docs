  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Access to Data Clusters](javascript:call_link\('abendata_cluster_obsolete.htm'\)) → 

IMPORT, obs\_id

[Short Reference](javascript:call_link\('abapimport_shortref.htm'\))

Obsolete Syntax

... MAJOR-ID id1 *\[*MINOR-ID id2*\]* ...

Effect

Outside of classes, the addition ID of the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) [FROM DATABASE](javascript:call_link\('abapimport_medium.htm'\)) can be replaced by these additions when database tables are imported. When id1 and id2 are specified, the same rules apply as for id.

A [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") is imported whose ID in the first part matches the value of id1. If MINOR-ID id2 is also specified, the data cluster is imported whose ID in the second part (at the positions after the number of characters specified in id1) is greater than or equal to the value in id2. The search is canceled once the first match is found.

Hints

-   When using id2, note that this data object must either only contain digits or only letters, since mixed forms can produce differing search results (depending on the platform).

-   MAJOR-ID and MINOR-ID are obsolete, since the specified ID is not unique. The ID can be created in the program instead.
    

Example

If a data cluster with the ID "Sausage" was exported, this statement is found when MAJOR-ID "Sau" is specified. It is also found if "ab" is specified as MINOR-ID, but it is not found if "yz" is specified as MINOR-ID.