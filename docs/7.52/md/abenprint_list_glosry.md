  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

spool list

Also called print list. [List](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_glosry.htm "Glossary Entry") not stored as a [screen list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_list_glosry.htm "Glossary Entry") in the [list buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_buffer_glosry.htm "Glossary Entry") but sent page by page to the [SAP spool system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_spool_system_glosry.htm "Glossary Entry"). When it is created, a spool list is associated with one [spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspool_request_glosry.htm "Glossary Entry") only. Spool lists can be stacked in [spool list levels](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_level_glosry.htm "Glossary Entry"). No more than two spool requests can be open at any one time for a spool list level. The commands used to create a spool list are [NEW-PAGE PRINT ON*|*OFF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm) and [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm).

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm)