  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP05](javascript:call_link\('abennews-740_sp05.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 7.40, SP05, ABENNEWS-740_SP05-OTHERS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 7.40, SP05

Modification

Database Commit for HTTP/HTTPS/SMTP Communication

In Release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry"), a [database commit](javascript:call_link\('abendb_commit.htm'\)) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before Release 7.40, SP05), a call from an ICF client program only raised a database commit, if the work process was switched due to the maximum waiting time being exceeded.