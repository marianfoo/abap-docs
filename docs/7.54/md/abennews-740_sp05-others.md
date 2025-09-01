  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP05](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740_sp05.htm) → 

Further Changes in Release 7.40, SP05

[1\. Database commit for HTTP/HTTPS/SMTP communication](#!ABAP_MODIFICATION_1@1@)

Modification 1

Database commit for HTTP/HTTPS/SMTP communication

In Release 7.40, SP05 and higher, during HTTP/HTTPS/SMTP communication using [Internet Communication Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternet_con_fra_glosry.htm "Glossary Entry"), a [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_commit.htm) is executed in an ICF server program or ICF client program (except while updating before every response is sent).

In previous versions (before Release 7.40, SP05), a call from an ICF client program only triggered a database commit, if the work process was switched due to the maximum waiting time being exceeded.