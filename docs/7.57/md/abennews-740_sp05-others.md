  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP05](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp05.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 7.40, SP05, ABENNEWS-740_SP05-OTHERS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 7.40, SP05

Modification

Database Commit for HTTP/HTTPS/SMTP Communication

In Release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry"), a [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit.htm) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before Release 7.40, SP05), a call from an ICF client program only raised a database commit, if the work process was switched due to the maximum waiting time being exceeded.