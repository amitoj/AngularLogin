CREATE DATABASE MMS;  


USE sequro_MMS

CREATE TABLE system_owner
(
   id	                       INT                 NOT NULL        AUTO_INCREMENT,
   sys_id	                   VARCHAR(25)         NOT NULL,       
   name                        VARCHAR(50)         NOT NULL,
   description                 VARCHAR(250),
   status                      CHAR(1)             NOT NULL,
   logo                        VARCHAR(2000),
   copyright                   VARCHAR(2000),
   creation_date               DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
   created_by                  VARCHAR(25)         NOT NULL,
   modification_date           DATETIME,
   modified_by                 VARCHAR(25),
   
      CONSTANT pk_system_owner  PRIMARY KEY (id)

);


CREATE TABLE participant_master
(
    id                         INT                 NOT NULL        AUTO_INCREMENT,
	sys_id                     VARCHAR(25)         NOT NULL,   
	participant_id             INT                 NOT NULL,   
	name                       VARCHAR(50)         NOT NULL,
	status                     CHAR(1)             NOT NULL,
	creation_date              DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                 VARCHAR(25)         NOT NULL,
	modification_date          DATETIME,
    modified_by                VARCHAR(25),
	
	
         CONSTANT pk_participant_master  PRIMARY KEY (id)
		 CONSTRAINT fk_participant_master_sys_id FOREIGN KEY (sys_id) REFERENCES system_owner (sys_id)
);


CREATE TABLE sponsor_code_master
(
    id	                        INT                 NOT NULL        AUTO_INCREMENT,
    sys_id                      VARCHAR(25)         NOT NULL, 
	sponsor_code                VARCHAR(8)          NOT NULL,
	participant_id              INT                 NOT NULL,
	status                      CHAR(1)             NOT NULL,
	creation_date               DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                  VARCHAR(25)         NOT NULL,
	modification_date           DATETIME,
    modified_by                 VARCHAR(25),
     
	 CONSTANT pk_sponsor_code_master  PRIMARY KEY (id)
);

CREATE TABLE merchant_category_code_master
(
    id                           INT                 NOT NULL        AUTO_INCREMENT,
	mcc	                         VARCHAR(4)          NOT NULL,
	description                  VARCHAR(250)        NOT NULL,
	status                       CHAR(1)             NOT NULL,
	creation_date                DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                   VARCHAR(25)         NOT NULL,
	modification_date            DATETIME,
    modified_by                  VARCHAR(25),
     
	 CONSTANT pk_merchant_category_code_master PRIMARY KEY (id)

);

CREATE TABLE country_currency_master
( 
    id	                          INT                 NOT NULL        AUTO_INCREMENT,
    country_code                  varchar(3)          NOT NULL,
	country_currency              VARCHAR(3)          NOT NULL,
	status                        CHAR(1)             NOT NULL,
	creation_date                 DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                    VARCHAR(25)         NOT NULL,
	modification_date             DATETIME,
    modified_by                   VARCHAR(25),
	 CONSTANT pk_country_currency_master PRIMARY KEY (id)


);


CREATE TABLE merchant_master
(

    id	                         BIGINT              NOT NULL        AUTO_INCREMENT,
    sys_id                       VARCHAR(25)         NOT NULL, 
	merchant_id	                 VARCHAR(15)         NOT NULL,
	name                         VARCHAR(40)         NOT NULL, 
	business_desc                VARCHAR(250), 
	merchant_type                VARCHAR(6),               
	mcc                          VARCHAR(4)          NOT NULL,
	participant_id               INT                 NOT NULL,
	settlement_currency          VARCHAR(3)          NOT NULL,     
	cards_allowed_flag           CHAR(1)             NOT NULL,
	assign_commission_id         INT,
	surcharge_flag               CHAR(1)             NOT NULL,
 	surcharge_amount             NUMERIC(16,2),
	payment_hold_release_flag    CHAR(1)             NOT NULL,
	dcc_flag                     CHAR(1)             NOT NULL,
	report_flag	                 CHAR(2)             NOT NULL,
	portal_access                CHAR(1)             NOT NULL,
	boarding_date                DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,            
	activation_date              DATETIME, 
	deactivation_date            DATETIME,
	status                       CHAR(1)             NOT NULL,
	creation_date                DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                   VARCHAR(25)         NOT NULL,
	modification_date            DATETIME,
    modified_by                  VARCHAR(25),
	 CONSTANT pk_merchant_master PRIMARY KEY (id)

);

CREATE TABLE merchant_paymode
(
    id                            INT                 NOT NULL        AUTO_INCREMENT,
	sys_id                        VARCHAR(25)         NOT NULL, 
	merchant_id                   VARCHAR(15)         NOT NULL,
	paymode                       VARCHAR(5)          NOT NULL,
	status                        CHAR(1)             NOT NULL,
	creation_date                 DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                    VARCHAR(25)         NOT NULL,
	modification_date             DATETIME,
    modified_by                   VARCHAR(25),
	 CONSTANT pk_merchant_paymode PRIMARY KEY (id)

);

CREATE TABLE merchant_bank_account
(
    id                           BIGINT              NOT NULL        AUTO_INCREMENT,
	sys_id                       VARCHAR(25)         NOT NULL,
	merchant_id                  VARCHAR(15)         NOT NULL,
	account_type                 VARCHAR(10)         NOT NULL,
	account_name                 VARCHAR(25)         NOT NULL,
	account_number               VARCHAR(50)         NOT NULL,
	bank_name                    VARCHAR(50)         NOT NULL,
	branch_name                  VARCHAR(50)         NOT NULL,
	branch_code                  VARCHAR(10)         NOT NULL,
	ifsc_code                    VARCHAR(12),
	customer_id                  VARCHAR(50),
	upi_address                  VARCHAR(2000),
	status                       CHAR(1)             NOT NULL,
	creation_date                DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                   VARCHAR(25)         NOT NULL,
	modification_date            DATETIME,
    modified_by                  VARCHAR(25),
     
	 CONSTANT pk_merchant_bank_account PRIMARY KEY (id)

);

CREATE TABLE kyc_master
(
    id                          INT              NOT NULL        AUTO_INCREMENT,
	sys_id                      VARCHAR(25)         NOT NULL,
	kyc_id                      VARCHAR(20)         NOT NULL,
	doc_name                    VARCHAR(30)         NOT NULL,
	doc_type                    VARCHAR(20)         NOT NULL,
	is_ekyc                     CHAR(1)             NOT NULL,
	status                      CHAR(1)             NOT NULL,
	creation_date               DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                  VARCHAR(25)         NOT NULL,
	modification_date           DATETIME,
    modified_by                 VARCHAR(25),
     
	 CONSTANT pk_kyc_master PRIMARY KEY (id)

);

CREATE TABLE merchant_kyc
(
    id	                      BIGINT              NOT NULL        AUTO_INCREMENT,
    sys_id                    VARCHAR(25)         NOT NULL,
	merchant_id               VARCHAR(15)         NOT NULL,
	identity_kyc_id	          VARCHAR(12)         NOT NULL,
	identity_proof	          TEXT                NOT NULL,
	address_kyc_id            VARCHAR(12)         NOT NULL,
	address_proof             TEXT                NOT NULL,
	ekyc_id	                  VARCHAR(20)         NOT NULL,
	ekyc_status	              CHAR(1)             NOT NULL,
	kyc_status                CHAR(1)             NOT NULL,
	creation_date             DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                VARCHAR(25)         NOT NULL,
    modification_date         DATETIME,
    modified_by               VARCHAR(25),
	 CONSTANT pk_merchant_kyc PRIMARY KEY (id)

);


CREATE TABLE merchant_assign_commission_plan
(
    id	                    INT                 NOT NULL        AUTO_INCREMENT,
    sys_id	                VARCHAR(25)         NOT NULL,   
    plan_id	                INT                 NOT NULL,
    comm_id	                INT                 NOT NULL,
    status                  CHAR(1)             NOT NULL,
	creation_date           DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by              VARCHAR(25)         NOT NULL,
	modification_date       DATETIME,
    modified_by             VARCHAR(25),
     
	 CONSTANT pk_merchant_assign_commission_plan PRIMARY KEY (id)
);

CREATE TABLE merchant_commission_plan

(
    id                     INT                 NOT NULL        AUTO_INCREMENT,
	sys_id                 VARCHAR(25)         NOT NULL, 
	comm_id                INT                 NOT NULL,
	txn_type               VARCHAR(20)         NOT NULL,
	paymode                CHAR(5)             NOT NULL,
	rate_flag              CHAR(2)             NOT NULL,
	fixed_rate	           DOUBLE,
	percentage             DOUBLE,
	slab_from	           NUMBER,
	slab_to                NUMBER,
	mixed_rate             DOUBLE,
	min_rate               DOUBLE,
	
	   CONSTANT pk_merchant_commission_plan PRIMARY KEY (id)

);

CREATE TABLE merchant_contact
(
    id	                            BIGINT              NOT NULL        AUTO_INCREMENT,
    sys_id	                        VARCHAR(25)         NOT NULL,
    merchant_id	                    VARCHAR(15)         NOT NULL,
    country                         VARCHAR(20)         NOT NULL,
	state	                        VARCHAR(50)         NOT NULL,
	city	                        VARCHAR(50)         NOT NULL                
	pin_code	                    VARCHAR(6),
	street_address_1	            VARCHAR(2000),
	street_address_2	            VARCHAR(2000),
	landmark	                    VARCHAR(2000),
	additional_address_field_1	    VARCHAR(2000),
	additional_address_field_2      VARCHAR(2000),
	status                          CHAR(1)             NOT NULL,
	creation_date                   DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                      VARCHAR(25)         NOT NULL,
	modification_date               DATETIME,
    modified_by                     VARCHAR(25),
     
	 CONSTANT pk_merchant_contact PRIMARY KEY (id)

);

CREATE TABLE merchant_media_contact
(
    id	                             BIGINT              NOT NULL        AUTO_INCREMENT,
    sys_id	                         VARCHAR(25)         NOT NULL,
    merchant_id	                     VARCHAR(15)         NOT NULL,
    contact_type                     CHAR(1)             NOT NULL,
	contact_value                    VARCHAR(50)         NOT NULL,
	status                           CHAR(1)             NOT NULL,
	creation_date                    DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                       VARCHAR(25)         NOT NULL,
	modification_date                DATETIME,
    modified_by                      VARCHAR(25),
	
	 CONSTANT pk_merchant_media_contact PRIMARY KEY (id)

);

CREATE TABLE terminal_master
(
    id                              BIGINT              NOT NULL        AUTO_INCREMENT,
	sys_id                          VARCHAR(25)         NOT NULL,
	merchant_id                     VARCHAR(15)         NOT NULL,
	terminal_id                     VARCHAR(8)          NOT NULL,
	terminal_type                   VARCHAR(6)          NOT NULL,         
	terminal_serial_nr              VARCHAR(20),   
	switch_terminal_serial_nr       VARCHAR(20),
	supported_txn                   VARCHAR(10)         NOT NULL,
	le_flag	                        CHAR(1)             NOT NULL,
	le_key                          VARCHAR(2000)        NOT NULL,
	surcharge_flag                  CHAR(1)             NOT NULL,
	risk_flag                       CHAR(1)             NOT NULL,
	status                          CHAR(1)             NOT NULL,
	creation_date                   DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                      VARCHAR(25)         NOT NULL,
	modification_date               DATETIME,
    modified_by                     VARCHAR(25),
	
	 CONSTANT pk_terminal_master PRIMARY KEY (id)

);

CREATE TABLE terminal_surcharge
(
    id                             BIGINT              NOT NULL        AUTO_INCREMENT,
	sys_id	                       VARCHAR(25)         NOT NULL,
	terminal_id                    VARCHAR(8)          NOT NULL,
	surcharge_type                 CHAR(1)             NOT NULL,    
	flate_rate                     INT                 NOT NULL,
	percentage                     DOUBLE              NOT NULL,
	status                         CHAR(1)             NOT NULL,
       
	    CONSTANT pk_terminal_surcharge PRIMARY KEY (id)
);

CREATE TABLE terminal_supported_mode
(
    id                             BIGINT              NOT NULL        AUTO_INCREMENT,
	sys_id                         VARCHAR(25)         NOT NULL,
	terminal_id                    VARCHAR(8)          NOT NULL,
	paymode                        CHAR(5)             NOT NULL,
	network_type                   VARCHAR(10)         NOT NULL,
	status                         CHAR(1)             NOT NULL,
	creation_date                  DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                     VARCHAR(25)         NOT NULL,
	modification_date              DATETIME,
    modified_by                    VARCHAR(25),
     
	 CONSTANT pk_terminal_supported_mode PRIMARY KEY (id)

);

CREATE TABLE terminal_risk_module
(
    id	                          BIGINT              NOT NULL        AUTO_INCREMENT,
    sys_id                        VARCHAR(25)         NOT NULL,
	terminal_id                   VARCHAR(8)          NOT NULL,
	max_amount                    NUMERIC(16,2)       NOT NULL,
	check_type                    CHAR(1)             NOT NULL,
	txn_amount                    NUMERIC(16,2),
	txn_count                     INT,
	status                        CHAR(1)             NOT NULL,
	creation_date                 DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                    VARCHAR(25)         NOT NULL,
	modification_date             DATETIME,
    modified_by                   VARCHAR(25),
     
	 CONSTANT pk_terminal_risk_module PRIMARY KEY (id)

);

CREATE TABLE request_log
(
    id                              BIGINT              NOT NULL        AUTO_INCREMENT,
	sys_id                          VARCHAR(25)         NOT NULL,
	action                          CHAR(1)             NOT NULL,
	entity                          VARCHAR(10)         NOT NULL,
	sub_entity                      VARCHAR(30)         NOT NULL,
	is_sensitive_field_present      CHAR(1)             NOT NULL,
	sensitive_field	                TEXT,
	previous_value                  TEXT,               
	new_value                       TEXT,                    
	req_status                      CHAR(1)             NOT NULL,
	maker_id                        VARCHAR(25)         NOT NULL,
	maker_remark                    TEXT,
	checker_id                      VARCHAR(25)         NOT NULL,
	checker_remark                  TEXT,
	checker_notification_send       CHAR(1)             NOT NULL,
	maker_notification_receive      CHAR(1)             NOT NULL,
 	creation_date                   DATETIME            NOT NULL        DEFAULT CURRENT_TIMESTAMP,
	created_by                      VARCHAR(25)         NOT NULL,
	modification_date               DATETIME,
    modified_by                     VARCHAR(25),
     
	 CONSTANT pk_request_log PRIMARY KEY (id)

);

CREATE TABLE user_access
(
    id                              INT               NOT NULL,
    type                            VARCHAR(6)	
);

CREATE TABLE user_type

(
    id                              INT              NOT NULL,
    user_type                       VARCHAR(10)      NOT NULL,
	access_type                     VARCHAR(10)      NOT NULL             
);

CREATE TABLE user
(
    id                              INT                 NOT NULL        AUTO_INCREMENT,
	sys_id                          VARCHAR(25)         NOT NULL,
	user_type_id                    VARCHAR(10)         NOT NULL,
	user_creation_id                VARCHAR(20)         NOT NULL,
	login_id	                    VARCHAR(25)         NOT NULL,
	whitelist_id                    BIGINT              NOT NULL,
	username                        VARCHAR(20)         NOT NULL,
	department                      VARCHAR(30)         NOT NULL,
	mail_address                    VARCHAR(30),
	mobilenumber                    VARCHAR(12),
	encryption_key                  VARCHAR(2000),
	login_status                    CHAR(1)             NOT NULL,
	user_password                   VARCHAR(250)        NOT NULL,
	last_login_time                 DATETIME            NOT NULL,      DEFAULT CURRENT_TIMESTAMP,
	user_lock_time                  DATETIME            NOT NULL,      DEFAULT CURRENT_TIMESTAMP,
	user_status	                    CHAR(1)             NOT NULL,
	creation_date                   DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP,
	created_by                      VARCHAR(25)         NOT NULL,                
	modification_date               DATETIME,
    modified_by                     VARCHAR(25),
  
       	 CONSTANT pk_user PRIMARY KEY (id)
);

CREATE TABLE user_password_history

(
    id	                           BIGINT              NOT NULL        AUTO_INCREMENT,
    user_id	                       VARCHAR(25)         NOT NULL,
    last_password                  VARCHAR(250)        NOT NULL,
	creation_date                  DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP,
	
	  CONSTANT pk_user_password_history PRIMARY KEY (id)

);

CREATE TABLE user_login
(
    id	                           INT                 NOT NULL        AUTO_INCREMENT,
    sys_id                         VARCHAR(25)         NOT NULL,
    user_id                        VARCHAR(25)         NOT NULL,
	ip_address                     VARCHAR(20),
	login_time                     DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP,      
	active_time                    DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP, 
	logout_time                    DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP, 
	session_id                     VARCHAR(250)        NOT NULL,
	token_key                      VARCHAR(250)        NOT NULL
      
	  CONSTANT pk_user_login PRIMARY KEY (id)
);

CREATE TABLE user_login_fail_attempt

(
    id                             BIGINT             NOT NULL,
	sys_id                         VARCHAR(25)        NOT NULL,
	user_id                        VARCHAR(25)        NOT NULL,
	creation_date                  DATETIME           NOT NULL       DEFAULT CURRENT_TIMESTAMP, 

);


CREATE TABLE menu
(
    id                             INT                 NOT NULL        AUTO_INCREMENT,
	sys_id                         VARCHAR(25)         NOT NULL,
	menu_page                      VARCHAR(250)        NOT NULL,
	menu_name                      VARCHAR(20)         NOT NULL,           
	menu_url                       TEXT,
	allowed_user                   TEXT                NOT NULL,
	status                         CHAR(1)             NOT NULL,
	creation_date                  DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP,
	created_by                     VARCHAR(25)         NOT NULL,                
	modification_date              DATETIME,
    modified_by                    VARCHAR(25),
  
       	 CONSTANT pk_menu PRIMARY KEY (id)

);


CREATE TABLE user_menu_mapping
(
    id                             INT                 NOT NULL        AUTO_INCREMENT,
	user_id                        VARCHAR(25)         NOT NULL,
	menu_id                        INT                 NOT NULL,
	status                         CHAR(1)             NOT NULL,
	creation_date                  DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP,
	created_by                     VARCHAR(25)         NOT NULL,                
	modification_date              DATETIME,
    modified_by                    VARCHAR(25),
  
       	 CONSTANT pk_user_menu_mapping PRIMARY KEY (id)
);

CREATE TABLE security_question
(
    id                             INT                 NOT NULL,
    question                       VARCHAR(2000)       NOT NULL
	status                         CHAR(1)             NOT NULL,
	creation_date                  DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP,
	created_by                     VARCHAR(25)         NOT NULL,                
	modification_date              DATETIME,
    modified_by                    VARCHAR(25),

);

CREATE TABLE user_security_answer
(
    id                             INT                 NOT NULL,
	user_id                        VARCHAR(25)         NOT NULL,
	answers                        VARCHAR(2000),      NOT NULL,
	status                         CHAR(1)             NOT NULL,
	creation_date                  DATETIME            NOT NULL       DEFAULT CURRENT_TIMESTAMP,
	created_by                     VARCHAR(25)         NOT NULL,                
	modification_date              DATETIME,
    modified_by                    VARCHAR(25),

);


CREATE TABLE user_ip_whitelist
(
     id                           INT                  NOT NULL,
     login_id                     VARCHAR(25)          NOT NULL
     ip_address                   VARCHAR(20)          NOT NULL
     status                       CHAR(1)              NOT NULL,
	 creation_date                DATETIME             NOT NULL       DEFAULT CURRENT_TIMESTAMP,
	 created_by                   VARCHAR(25)          NOT NULL,                
	 modification_date            DATETIME,
     modified_by                  VARCHAR(25),

);