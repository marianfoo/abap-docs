  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP10](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740_sp10.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.40%2C%20SP10%2C%20ABENNEWS-740_SP10-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP SQL in ABAP Release 7.40, SP10

Modification

Access to Replacement Objects

In ABAP release 7.40, SP10 and higher, it is possible to define a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") as a [replacement object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_replacement_objects.htm) in ABAP Dictionary for a database table or a DDIC database view.

If a replacement object is defined for a database table or DDIC database view specified as a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement, the SELECT statement accesses the CDS view and not the database table or the DDIC database view.

This change was implemented using a kernel patch after ABAP release 7.40, SP10. A replacement object can only be defined using an internal tool. It is currently not possible to use transaction SE11 to define the replacement object. In ABAP release 7.40, the definition of replacement objects is reserved for specific internal SAP developments and should be otherwise transparent.

From ABAP release 7.61 onwards (but not in ABAP release 7.60), it will be possible to explicitly define a replacement object in transaction SE11 and implicitly evaluate the object.