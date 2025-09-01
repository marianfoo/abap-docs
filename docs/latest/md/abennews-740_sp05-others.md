  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Further%20Changes%20in%20ABAP%20Release%207.40%2C%20SP05%2C%20ABENNEWS-740_SP05-OTHERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Further Changes in ABAP Release 7.40, SP05

Modification

Database Commit for HTTP/HTTPS/SMTP Communication

In ABAP release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry"), a [database commit](javascript:call_link\('abendb_commit.htm'\)) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before ABAP release 7.40, SP05), a call from an ICF client program only raised a database commit, if the work process was switched due to the maximum waiting time being exceeded.