  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) → 

ABAP CDS - Performance Note

The [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") provide options for abstract data modeling, which make the abstract data layer much more significant than in the options available in the classic ABAP Dictionary. The ABAP CDS make it easier to define platform-independent, semantically enriched data models for different kinds of applications, for example, search applications, analytical applications, and transactional applications.

The structure of these abstract data models is mapped directly to objects in the database, that is mainly to [CDS database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry"). At the same time, the application logic is moved from AS ABAP to the database server ("code push down"). This means that the data is processed where it is saved, which in principle should result in an improvement in performance.

On the other hand, modeling with ABAP CDS can result in SQL statements whose complexity far exceeds that of the database views of the ABAP Dictionary or of ABAP SQL statements in previous ABAP programs. Database accesses are made even more complex by interdependencies between the objects in the database. This increased complexity makes it more difficult to predict SQL performance. The response times of these datacentric applications can be affected by data volume, the selectivity of access, and the ability of the current database to optimize the execution of complex statements. The result of a performance measurement in one database cannot usually be applied to another platform.

To make sure that the performance of a CDS-based application meets expectations on all database platforms, we strongly recommend performing specific (non-generic) application tests with realistic data on all relevant platforms. If the required response time is not achieved on a platform, you can try making platform-specific settings to get the required results. If this is not successful, the application logic or data structure must be adapted.