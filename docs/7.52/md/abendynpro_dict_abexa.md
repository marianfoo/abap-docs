  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Dynpro Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_fields.htm) →  [Screen Fields - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_abexas.htm) → 

Dynpros, Fields with Reference to ABAP Dictionary

The example shows how dynpro fields can be associated with ABAP Dictionary.

Source Code

PROGRAM demo\_dynpro\_dictionary .
TABLES demo\_conn.
DATA wa\_spfli TYPE spfli.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  CLEAR demo\_conn-mark.
  MOVE-CORRESPONDING wa\_spfli TO demo\_conn.
  CLEAR wa\_spfli.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  IF demo\_conn-mark = 'X'.
    LEAVE PROGRAM.
  ENDIF.
  MOVE-CORRESPONDING demo\_conn TO wa\_spfli.
  SELECT  SINGLE cityfrom, airpfrom, cityto, airpto,
                 fltime, deptime, arrtime
    FROM  spfli
    WHERE carrid = @wa\_spfli-carrid AND connid = @wa\_spfli-connid
    INTO  CORRESPONDING FIELDS OF @wa\_spfli.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The statement TABLES passes the components of the structure DEMO\_CONN from ABAP Dictionary. The structure DEMO\_CONN was especially created in ABAP Dictionary for dynpros of the flight data model. Apart from the components of the database table SPFLI, there is also a component MARK whose domain S\_FLAG only defines the fixed values " " and "X". On the dynpro, the ABAP Dictionary text for MARK is overwritten with "Cancel"; for all other fields the ABAP Dictionary fields are used. The input attribute of some fields was deactivated in Screen Painter. Users can enter values for the airline and flight number. In this process, the user is automatically assisted by the field and the input help and the valid value check against check tables of ABAP Dictionary. These checks are performed automatically before any dialog module is called in the ABAP program. It is not possible for the user to enter an airline not defined in the check table SCARR or to enter any flight numbers not matching the airlines defined in SPFLI, or to enter any values for MARK except " " and "X". Not all these checks need to be programmed in the ABAP program. The module user\_command\_0100 of the ABAP program reads additional values for the checked key from the database table SPFLI and sends them to the dynpro in the init\_screen\_100 event. The work area demo\_conn, declared using the statement TABLES is used as an interface, while the actual data from the database is edited in the work area wa\_spfli. If the user fills the Cancel field with "X", the program exits.