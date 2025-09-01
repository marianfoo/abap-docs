  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

Further Changes in Release 7.40, SP05

Modification

Database commit for HTTP/HTTPS/SMTP communication

In Release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry"), a [database commit](javascript:call_link\('abendb_commit.htm'\)) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before Release 7.40, SP05), a call from an ICF client program only raised a database commit, if the work process was switched due to the maximum waiting time being exceeded.