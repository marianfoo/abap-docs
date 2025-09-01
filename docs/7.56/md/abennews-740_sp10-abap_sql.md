  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740.htm) →  [News for Release 7.40, SP10](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp10.htm) → 

ABAP SQL in Release 7.40, SP10

Modification

Access to Replacement Objects

In Release 7.40, SP10 and higher, it is possible to define a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") as a [replacement object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_replacement_objects.htm) in ABAP Dictionary for a database table or a DDIC database view.

If a replacement object is defined for a database table or DDIC database view specified as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement, the SELECT statement accesses the CDS view and not the database table or the DDIC database view.

This change was implemented using a kernel patch after Release 7.40, SP10. A replacement object can only be defined using an internal tool. It is currently not possible to use transaction SE11 to define the replacement object. In Release 7.40, the definition of replacement objects is reserved for specific SAP-internal developments and should be otherwise transparent.

From Release 7.61 onwards (but not in Release 7.60), it will be possible to explicitly define a replacement object in transaction SE11 and implicitly evaluate the object.