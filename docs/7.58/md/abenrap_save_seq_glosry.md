  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20save%20sequence%2C%20ABENRAP_SAVE_SEQ_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP save sequence

The RAP save sequence is part of the [RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") runtime and is triggered after at least one successful modification was performed during the [interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry"). It saves data from the [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") on the database.

The RAP save sequence is divided into three phases that are entered in this order:

-   [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry")
-   [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry")
-   [RAP cleanup phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cleanup_phase_glosry.htm "Glossary Entry")